import Papa from 'papaparse'
import type { ChartData, Column, Row, Cell } from './types'

// Parse pasted CSV/TSV text into typed columns + rows. A column is treated as
// numeric only if every non-empty value in it parses as a finite number; such
// values are coerced to numbers so the charts plot them correctly.
export function parseCsv(text: string): ChartData {
  const result = Papa.parse<string[]>(text.trim(), {
    skipEmptyLines: 'greedy',
  })
  const matrix = (result.data || []).filter((r) => Array.isArray(r) && r.length > 0)
  if (matrix.length === 0) return { columns: [], rows: [] }

  const header = matrix[0].map((h, i) => (h ?? '').toString().trim() || `Column ${i + 1}`)
  const body = matrix.slice(1)

  const numeric: boolean[] = header.map((_, c) => {
    let sawValue = false
    for (const r of body) {
      const raw = (r[c] ?? '').toString().trim()
      if (raw === '') continue
      sawValue = true
      if (!isNumeric(raw)) return false
    }
    return sawValue // all-empty column → not numeric
  })

  const columns: Column[] = header.map((name, c) => ({ name, numeric: numeric[c] }))

  const rows: Row[] = body.map((r) => {
    const row: Row = {}
    header.forEach((name, c) => {
      const raw = (r[c] ?? '').toString().trim()
      row[name] = numeric[c] && raw !== '' ? toNumber(raw) : raw
    })
    return row
  })

  return { columns, rows }
}

function isNumeric(s: string): boolean {
  // Allow thousands separators and a leading currency/percent sign.
  const cleaned = s.replace(/[,£$€%\s]/g, '')
  if (cleaned === '' || cleaned === '-' || cleaned === '.') return false
  return Number.isFinite(Number(cleaned))
}

function toNumber(s: string): Cell {
  const cleaned = s.replace(/[,£$€%\s]/g, '')
  const n = Number(cleaned)
  return Number.isFinite(n) ? n : s
}

// Serialise the current data back to CSV (used by the table editor / export).
export function toCsv(columns: Column[], rows: Row[]): string {
  const head = columns.map((c) => c.name)
  const body = rows.map((r) => columns.map((c) => String(r[c.name] ?? '')))
  return Papa.unparse([head, ...body])
}
