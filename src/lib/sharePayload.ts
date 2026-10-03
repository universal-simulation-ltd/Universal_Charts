// A share link is somebody else's JSON, so read it like it.
//
// `decodeShare` used to check only that `config`, `columns` and `rows` were
// present and hand the rest straight to the store. Nothing in a link could run
// script — React escapes it all — but it could still break the page or the
// export: an unknown chart type rendered an empty card, a palette of non-colour
// strings went into every exported SVG's `fill`, an empty palette made every
// series `undefined`, and a link carrying a few hundred thousand rows froze the
// tab. This keeps what a real link carries and drops or clamps the rest.
//
// ⚠️ Imports nothing but types and the palette, so scripts/sharePayload.test.mjs
// can load it under Node's type-stripping.

import type { Cell, ChartConfig, ChartType, Column, Row, SharePayload } from './types'
import { DEFAULT_PALETTE } from './palette.ts'

const TYPES: ChartType[] = ['bar', 'stackedBar', 'horizontalBar', 'line', 'area', 'pie', 'donut', 'scatter', 'radar']

/** Far beyond anything a chart can show legibly, and far below what freezes a tab. */
export const MAX_ROWS = 5000
export const MAX_COLUMNS = 100
const MAX_TEXT = 500
const HEX = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i

const isObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)
const text = (v: unknown, fallback = ''): string => (typeof v === 'string' ? v.slice(0, MAX_TEXT) : fallback)

function cell(v: unknown): Cell | null {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null
  if (typeof v === 'string') return v.slice(0, MAX_TEXT)
  return null
}

export function sanitizeShare(raw: unknown): SharePayload | null {
  if (!isObject(raw) || !isObject(raw.config) || !Array.isArray(raw.columns) || !Array.isArray(raw.rows)) return null

  const columns: Column[] = []
  const seen = new Set<string>()
  for (const c of raw.columns.slice(0, MAX_COLUMNS)) {
    if (!isObject(c) || typeof c.name !== 'string') continue
    const name = c.name.slice(0, MAX_TEXT)
    // `__proto__` as an object key re-points the row's prototype instead of
    // storing a value; a duplicate name would make two columns share one cell.
    if (!name || name === '__proto__' || seen.has(name)) continue
    seen.add(name)
    columns.push({ name, numeric: c.numeric === true })
  }
  if (columns.length === 0) return null

  const rows: Row[] = []
  for (const r of raw.rows.slice(0, MAX_ROWS)) {
    if (!isObject(r)) continue
    const row: Row = {}
    for (const { name } of columns) {
      const v = cell(r[name])
      if (v !== null) row[name] = v
    }
    rows.push(row)
  }

  const c = raw.config
  const names = new Set(columns.map((col) => col.name))
  const palette = Array.isArray(c.palette)
    ? c.palette.filter((p): p is string => typeof p === 'string' && HEX.test(p)).slice(0, 32)
    : []
  const config: ChartConfig = {
    type: TYPES.includes(c.type as ChartType) ? (c.type as ChartType) : 'bar',
    xKey: typeof c.xKey === 'string' && names.has(c.xKey) ? c.xKey : columns[0].name,
    yKeys: Array.isArray(c.yKeys) ? c.yKeys.filter((k): k is string => typeof k === 'string' && names.has(k)) : [],
    title: text(c.title),
    showGrid: c.showGrid !== false,
    showLegend: c.showLegend !== false,
    showLabels: c.showLabels === true,
    smooth: c.smooth !== false,
    // Topped up from the defaults: a link left with one valid colour would
    // otherwise paint every series the same.
    palette: [...palette, ...DEFAULT_PALETTE.filter((d) => !palette.includes(d))],
  }

  return { config, columns, rows }
}
