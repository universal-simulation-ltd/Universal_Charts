import {
  ResponsiveContainer,
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  PieChart, Pie, Cell, ScatterChart, Scatter,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts'
import type { ChartConfig, Row } from '../../lib/types'
import { paletteOf } from '../../lib/palette'

interface Props {
  config: ChartConfig
  rows: Row[]
}

const HEIGHT = 380

export default function ChartView({ config, rows }: Props) {
  const { type, xKey, yKeys, showGrid, showLegend, showLabels, smooth, palette } = config

  const needsSeries = type !== 'scatter'
  const noData =
    rows.length === 0 ||
    !xKey ||
    (needsSeries ? yKeys.length === 0 : yKeys.length === 0)

  if (noData) {
    return (
      <div style={{ height: HEIGHT }} className="flex items-center justify-center text-center text-sm text-slate-400 px-6">
        <div>
          <div className="text-3xl mb-2" aria-hidden="true">📈</div>
          Choose a category (X) and at least one numeric series (Y) to draw a chart.
        </div>
      </div>
    )
  }

  const colors = paletteOf(Math.max(yKeys.length, rows.length), palette)
  const curve = smooth ? 'monotone' : 'linear'
  const grid = showGrid ? <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /> : null
  const legend = showLegend ? <Legend /> : null

  return (
    <div style={{ width: '100%', height: HEIGHT }}>
      <ResponsiveContainer width="100%" height="100%">
        {render()}
      </ResponsiveContainer>
    </div>
  )

  function render() {
    switch (type) {
      case 'bar':
      case 'stackedBar':
        return (
          <BarChart data={rows} margin={{ top: 16, right: 24, left: 4, bottom: 4 }}>
            {grid}
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            {legend}
            {yKeys.map((k, i) => (
              <Bar key={k} dataKey={k} fill={colors[i]} stackId={type === 'stackedBar' ? 'a' : undefined} radius={type === 'stackedBar' ? undefined : [3, 3, 0, 0]}>
                {showLabels && <LabelList dataKey={k} position="top" style={{ fontSize: 11, fill: '#475569' }} />}
              </Bar>
            ))}
          </BarChart>
        )

      case 'horizontalBar':
        return (
          <BarChart data={rows} layout="vertical" margin={{ top: 16, right: 24, left: 8, bottom: 4 }}>
            {grid}
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis type="category" dataKey={xKey} tick={{ fontSize: 12 }} width={110} />
            <Tooltip />
            {legend}
            {yKeys.map((k, i) => (
              <Bar key={k} dataKey={k} fill={colors[i]} radius={[0, 3, 3, 0]}>
                {showLabels && <LabelList dataKey={k} position="right" style={{ fontSize: 11, fill: '#475569' }} />}
              </Bar>
            ))}
          </BarChart>
        )

      case 'line':
        return (
          <LineChart data={rows} margin={{ top: 16, right: 24, left: 4, bottom: 4 }}>
            {grid}
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            {legend}
            {yKeys.map((k, i) => (
              <Line key={k} type={curve} dataKey={k} stroke={colors[i]} strokeWidth={2} dot={{ r: 3 }}>
                {showLabels && <LabelList dataKey={k} position="top" style={{ fontSize: 11, fill: '#475569' }} />}
              </Line>
            ))}
          </LineChart>
        )

      case 'area':
        return (
          <AreaChart data={rows} margin={{ top: 16, right: 24, left: 4, bottom: 4 }}>
            {grid}
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            {legend}
            {yKeys.map((k, i) => (
              <Area key={k} type={curve} dataKey={k} stroke={colors[i]} fill={colors[i]} fillOpacity={0.25} strokeWidth={2} />
            ))}
          </AreaChart>
        )

      case 'pie':
      case 'donut': {
        const pieData = rows.map((r) => ({ name: String(r[xKey] ?? ''), value: Number(r[yKeys[0]]) || 0 }))
        return (
          <PieChart margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
            <Tooltip />
            {legend}
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              innerRadius={type === 'donut' ? '55%' : 0}
              label={showLabels}
            >
              {pieData.map((_, i) => <Cell key={i} fill={colors[i]} />)}
            </Pie>
          </PieChart>
        )
      }

      case 'scatter':
        return (
          <ScatterChart margin={{ top: 16, right: 24, left: 4, bottom: 12 }}>
            {grid}
            <XAxis type="number" dataKey={xKey} name={xKey} tick={{ fontSize: 12 }} />
            <YAxis type="number" dataKey={yKeys[0]} name={yKeys[0]} tick={{ fontSize: 12 }} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            {legend}
            <Scatter name={`${xKey} vs ${yKeys[0]}`} data={rows} fill={colors[0]} />
          </ScatterChart>
        )

      case 'radar':
        return (
          <RadarChart data={rows} margin={{ top: 16, right: 24, left: 24, bottom: 8 }} outerRadius="72%">
            <PolarGrid />
            <PolarAngleAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <PolarRadiusAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            {legend}
            {yKeys.map((k, i) => (
              <Radar key={k} name={k} dataKey={k} stroke={colors[i]} fill={colors[i]} fillOpacity={0.2} />
            ))}
          </RadarChart>
        )

      default:
        return <div />
    }
  }
}
