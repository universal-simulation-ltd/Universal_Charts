import { useRef, useState } from 'react'
import { useChartStore } from '../../stores/chartStore'
import { SAMPLES } from '../../lib/samples'

const MAX_FILE_BYTES = 5 * 1024 * 1024

export default function DataPanel() {
  const rawText = useChartStore((s) => s.rawText)
  const setRawText = useChartStore((s) => s.setRawText)
  const applyText = useChartStore((s) => s.applyText)
  const loadSample = useChartStore((s) => s.loadSample)
  const columns = useChartStore((s) => s.columns)
  const rows = useChartStore((s) => s.rows)

  const numericCols = columns.filter((c) => c.numeric).map((c) => c.name)
  const fileRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [fileError, setFileError] = useState<string | null>(null)

  // A file is read here, in the browser, exactly like pasted text — nothing
  // is uploaded. The cap is about the tab, not privacy: past a few MB the
  // textarea and the chart both crawl, and no chart shows that many points.
  const openFile = async (file: File) => {
    setFileError(null)
    if (file.size > MAX_FILE_BYTES) {
      setFileError(`That file is ${(file.size / 1048576).toFixed(1)} MB — Charts takes up to 5 MB. Trim it to the rows you want to plot.`)
      return
    }
    try {
      setRawText(await file.text())
      applyText()
    } catch {
      setFileError('That file could not be read.')
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Data (CSV)</div>
        <div className="flex gap-1.5">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => loadSample(s.id)}
              className="rounded-md px-2 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800"
              title={`Load sample: ${s.label}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={rawText}
        aria-label="Data (CSV)"
        onDragOver={(e) => {
          if (!e.dataTransfer.types.includes('Files')) return
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          const file = e.dataTransfer.files?.[0]
          if (!file) return
          e.preventDefault()
          setDragging(false)
          void openFile(file)
        }}
        onChange={(e) => setRawText(e.target.value)}
        spellCheck={false}
        rows={8}
        className={`w-full rounded-md border px-3 ${dragging ? 'border-orange-500 ring-2 ring-orange-200 dark:ring-orange-500/40' : 'border-slate-300'} py-2 font-mono text-xs leading-relaxed focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none dark:bg-slate-950 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-orange-500 dark:focus:ring-orange-500/30`}
        placeholder={'Paste CSV or drop a .csv file here — first row is the header, e.g.\nMonth,Sales\nJan,120\nFeb,150'}
      />

      <input
        ref={fileRef}
        type="file"
        accept=".csv,.tsv,.txt,text/csv,text/tab-separated-values,text/plain"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          // Reset, or choosing the same file twice fires no change event.
          e.target.value = ''
          if (file) void openFile(file)
        }}
      />
      {fileError && <p role="alert" className="text-xs text-red-600 dark:text-red-400">{fileError}</p>}

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500 dark:text-slate-300">
          {rows.length} row{rows.length === 1 ? '' : 's'} · {columns.length} column{columns.length === 1 ? '' : 's'}
          {numericCols.length > 0 && <span className="text-slate-400"> · numeric: {numericCols.join(', ')}</span>}
        </p>
        {/* Dark flips this to the inverse: slate-800 on a slate-900 card is a
            button nobody can find. */}
        <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-800"
        >
          Open file
        </button>
        <button
          type="button"
          onClick={applyText}
          className="shrink-0 rounded-md bg-slate-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
        >
          Update chart
        </button>
        </div>
      </div>

      <p className="text-[11px] text-slate-400">Your data stays in your browser — nothing is uploaded.</p>
    </div>
  )
}
