import { create } from 'zustand'
import type { ChartConfig, ChartType, Column, Row, SharePayload } from '../lib/types'
import { parseCsv } from '../lib/csv'
import { DEFAULT_PALETTE } from '../lib/palette'
import { DEFAULT_SAMPLE, SAMPLES } from '../lib/samples'

function defaultConfig(): ChartConfig {
  return {
    type: 'bar',
    xKey: '',
    yKeys: [],
    title: '',
    showGrid: true,
    showLegend: true,
    showLabels: false,
    smooth: true,
    palette: [...DEFAULT_PALETTE],
  }
}

// Pick sensible axes from the columns: the first non-numeric column is the
// category (x), every numeric column becomes a series (y).
function deriveAxes(columns: Column[]): { xKey: string; yKeys: string[] } {
  if (columns.length === 0) return { xKey: '', yKeys: [] }
  const firstCategory = columns.find((c) => !c.numeric)
  const xKey = (firstCategory ?? columns[0]).name
  const yKeys = columns.filter((c) => c.numeric && c.name !== xKey).map((c) => c.name)
  // If nothing numeric, fall back to any column other than x so the picker has
  // something to offer.
  if (yKeys.length === 0) return { xKey, yKeys: columns.filter((c) => c.name !== xKey).map((c) => c.name).slice(0, 1) }
  return { xKey, yKeys }
}

interface ChartState {
  columns: Column[]
  rows: Row[]
  rawText: string
  config: ChartConfig
  brandColor: string | null

  setRawText: (text: string) => void
  applyText: () => void
  loadSample: (id: string) => void
  setType: (type: ChartType) => void
  setXKey: (key: string) => void
  toggleYKey: (key: string) => void
  patchConfig: (partial: Partial<ChartConfig>) => void
  setPaletteColor: (index: number, color: string) => void
  applyBrandColor: (color: string | null) => void
  hydrate: (payload: SharePayload) => void
  payload: () => SharePayload
}

function ingest(text: string, prev: ChartConfig): { columns: Column[]; rows: Row[]; config: ChartConfig } {
  const { columns, rows } = parseCsv(text)
  const { xKey, yKeys } = deriveAxes(columns)
  return { columns, rows, config: { ...prev, xKey, yKeys } }
}

const initial = ingest(DEFAULT_SAMPLE.csv, defaultConfig())

export const useChartStore = create<ChartState>((set, get) => ({
  columns: initial.columns,
  rows: initial.rows,
  rawText: DEFAULT_SAMPLE.csv,
  config: initial.config,
  brandColor: null,

  setRawText: (text) => set({ rawText: text }),

  applyText: () => {
    const { rawText, config } = get()
    set(ingest(rawText, config))
  },

  loadSample: (id) => {
    const sample = SAMPLES.find((s) => s.id === id) ?? DEFAULT_SAMPLE
    set({ rawText: sample.csv, ...ingest(sample.csv, get().config) })
  },

  setType: (type) => set((s) => ({ config: { ...s.config, type } })),

  setXKey: (key) =>
    set((s) => ({
      config: { ...s.config, xKey: key, yKeys: s.config.yKeys.filter((y) => y !== key) },
    })),

  toggleYKey: (key) =>
    set((s) => {
      const has = s.config.yKeys.includes(key)
      const yKeys = has ? s.config.yKeys.filter((y) => y !== key) : [...s.config.yKeys, key]
      return { config: { ...s.config, yKeys } }
    }),

  patchConfig: (partial) => set((s) => ({ config: { ...s.config, ...partial } })),

  setPaletteColor: (index, color) =>
    set((s) => {
      const palette = [...s.config.palette]
      palette[index] = color
      return { config: { ...s.config, palette } }
    }),

  applyBrandColor: (color) =>
    set((s) => {
      if (!color || s.brandColor === color) return {}
      // Lead the palette with the org's brand colour, keeping the rest.
      const palette = [color, ...s.config.palette.filter((c) => c !== color)]
      return { brandColor: color, config: { ...s.config, palette } }
    }),

  hydrate: (payload) =>
    set({
      columns: payload.columns,
      rows: payload.rows,
      config: { ...defaultConfig(), ...payload.config },
      rawText: csvFromData(payload.columns, payload.rows),
    }),

  payload: () => {
    const { config, columns, rows } = get()
    return { config, columns, rows }
  },
}))

// Lightweight CSV reconstruction for the editor textarea after a share-link load
// (avoids importing the heavier toCsv into the store's hot path).
function csvFromData(columns: Column[], rows: Row[]): string {
  const head = columns.map((c) => c.name).join(',')
  const body = rows.map((r) => columns.map((c) => String(r[c.name] ?? '')).join(',')).join('\n')
  return head + '\n' + body
}
