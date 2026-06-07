// Shared domain types for Universal Charts.

export type ChartType =
  | 'bar'
  | 'stackedBar'
  | 'horizontalBar'
  | 'line'
  | 'area'
  | 'pie'
  | 'donut'
  | 'scatter'
  | 'radar'

export interface Column {
  name: string
  numeric: boolean
}

// A parsed data row. Numeric columns are coerced to numbers; everything else
// stays a string.
export type Cell = string | number
export type Row = Record<string, Cell>

export interface ChartConfig {
  type: ChartType
  xKey: string        // category / label column
  yKeys: string[]     // one or more value columns (series)
  title: string
  showGrid: boolean
  showLegend: boolean
  showLabels: boolean
  smooth: boolean     // monotone vs linear for line/area
  palette: string[]
}

export interface ChartData {
  columns: Column[]
  rows: Row[]
}

// What gets compressed into the share link.
export interface SharePayload {
  config: ChartConfig
  columns: Column[]
  rows: Row[]
}

export const CHART_TYPES: { type: ChartType; label: string }[] = [
  { type: 'bar', label: 'Bar' },
  { type: 'stackedBar', label: 'Stacked bar' },
  { type: 'horizontalBar', label: 'Horizontal bar' },
  { type: 'line', label: 'Line' },
  { type: 'area', label: 'Area' },
  { type: 'pie', label: 'Pie' },
  { type: 'donut', label: 'Donut' },
  { type: 'scatter', label: 'Scatter' },
  { type: 'radar', label: 'Radar' },
]

// Chart types that visualise a single value series keyed by category.
export const SINGLE_SERIES: ChartType[] = ['pie', 'donut', 'scatter']
