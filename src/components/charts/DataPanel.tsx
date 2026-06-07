import { useChartStore } from '../../stores/chartStore'
import { SAMPLES } from '../../lib/samples'

export default function DataPanel() {
  const rawText = useChartStore((s) => s.rawText)
  const setRawText = useChartStore((s) => s.setRawText)
  const applyText = useChartStore((s) => s.applyText)
  const loadSample = useChartStore((s) => s.loadSample)
  const columns = useChartStore((s) => s.columns)
  const rows = useChartStore((s) => s.rows)

  const numericCols = columns.filter((c) => c.numeric).map((c) => c.name)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Data (CSV)</div>
        <div className="flex gap-1.5">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => loadSample(s.id)}
              className="rounded-md px-2 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              title={`Load sample: ${s.label}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
        spellCheck={false}
        rows={8}
        className="w-full rounded-md border border-slate-300 px-3 py-2 font-mono text-xs leading-relaxed focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
        placeholder={'Paste CSV — first row is the header, e.g.\nMonth,Sales\nJan,120\nFeb,150'}
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          {rows.length} row{rows.length === 1 ? '' : 's'} · {columns.length} column{columns.length === 1 ? '' : 's'}
          {numericCols.length > 0 && <span className="text-slate-400"> · numeric: {numericCols.join(', ')}</span>}
        </p>
        <button
          onClick={applyText}
          className="shrink-0 rounded-md bg-slate-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-900"
        >
          Update chart
        </button>
      </div>

      <p className="text-[11px] text-slate-400">Your data stays in your browser — nothing is uploaded.</p>
    </div>
  )
}
