import { useChartStore } from '../../stores/chartStore'
import { CHART_TYPES, SINGLE_SERIES } from '../../lib/types'

export default function ChartControls() {
  const columns = useChartStore((s) => s.columns)
  const config = useChartStore((s) => s.config)
  const setType = useChartStore((s) => s.setType)
  const setXKey = useChartStore((s) => s.setXKey)
  const toggleYKey = useChartStore((s) => s.toggleYKey)
  const patchConfig = useChartStore((s) => s.patchConfig)
  const setPaletteColor = useChartStore((s) => s.setPaletteColor)

  const numericCols = columns.filter((c) => c.numeric)
  const singleSeries = SINGLE_SERIES.includes(config.type)
  const swatchCount = Math.max(1, singleSeries ? Math.min(8, config.yKeys.length || 1) : config.yKeys.length)

  return (
    <div className="space-y-5">
      <Field label="Title">
        <input
          value={config.title}
          onChange={(e) => patchConfig({ title: e.target.value })}
          placeholder="Optional chart title"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
        />
      </Field>

      <Field label="Chart type">
        <div className="grid grid-cols-3 gap-1.5">
          {CHART_TYPES.map((t) => (
            <button
              key={t.type}
              onClick={() => setType(t.type)}
              className={`rounded-md px-2 py-1.5 text-xs font-medium ring-1 transition-colors ${
                config.type === t.type
                  ? 'bg-orange-700 text-white ring-orange-600'
                  : 'bg-white text-slate-600 ring-slate-200 hover:bg-slate-50'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Field>

      <Field label={singleSeries ? 'Category' : 'X axis (category)'}>
        <select
          value={config.xKey}
          onChange={(e) => setXKey(e.target.value)}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white focus:border-orange-500 outline-none"
        >
          {columns.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
        </select>
      </Field>

      <Field label={singleSeries ? (config.type === 'scatter' ? 'Y value (first selected)' : 'Value (first selected)') : 'Y series (values)'}>
        {numericCols.length === 0 ? (
          <p className="text-xs text-slate-400">No numeric columns detected.</p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {numericCols.filter((c) => c.name !== config.xKey).map((c) => {
              const on = config.yKeys.includes(c.name)
              return (
                <button
                  key={c.name}
                  onClick={() => toggleYKey(c.name)}
                  className={`rounded-full px-3 py-1 text-xs font-medium ring-1 transition-colors ${
                    on ? 'bg-orange-700 text-white ring-orange-600' : 'bg-white text-slate-600 ring-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {c.name}
                </button>
              )
            })}
          </div>
        )}
      </Field>

      <Field label="Colours">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: swatchCount }).map((_, i) => (
            <input
              key={i}
              type="color"
              value={config.palette[i] ?? '#888888'}
              onChange={(e) => setPaletteColor(i, e.target.value)}
              className="h-8 w-8 rounded-md ring-1 ring-slate-200 cursor-pointer"
              title={`Colour ${i + 1}`}
            />
          ))}
        </div>
        {singleSeries && <p className="mt-1 text-[11px] text-slate-400">Colours cycle across slices/points.</p>}
      </Field>

      <Field label="Options">
        <div className="space-y-1.5">
          <Toggle label="Gridlines" checked={config.showGrid} onChange={(v) => patchConfig({ showGrid: v })} />
          <Toggle label="Legend" checked={config.showLegend} onChange={(v) => patchConfig({ showLegend: v })} />
          <Toggle label="Data labels" checked={config.showLabels} onChange={(v) => patchConfig({ showLabels: v })} />
          {(config.type === 'line' || config.type === 'area') && (
            <Toggle label="Smooth curves" checked={config.smooth} onChange={(v) => patchConfig({ smooth: v })} />
          )}
        </div>
      </Field>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
      {children}
    </div>
  )
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-4 w-4 accent-orange-600" />
      {label}
    </label>
  )
}
