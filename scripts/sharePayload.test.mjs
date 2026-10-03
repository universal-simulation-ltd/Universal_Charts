// What survives a share link: `npm test`.
//
// A share link is somebody else's JSON. These pin that a real link comes back
// intact and that junk is dropped or clamped rather than handed to the chart.

import { strict as assert } from 'node:assert'
import { sanitizeShare, MAX_ROWS } from '../src/lib/sharePayload.ts'
import { DEFAULT_PALETTE } from '../src/lib/palette.ts'

let failures = 0
function check(name, fn) {
  try {
    fn()
    console.log(`  ok  ${name}`)
  } catch (err) {
    failures++
    console.error(`FAIL  ${name}\n      ${err.message}`)
  }
}

const good = {
  config: { type: 'line', xKey: 'Month', yKeys: ['Sales'], title: 'Q1', showGrid: false, showLegend: true, showLabels: true, smooth: false, palette: [...DEFAULT_PALETTE].reverse() },
  columns: [{ name: 'Month', numeric: false }, { name: 'Sales', numeric: true }],
  rows: [{ Month: 'London, UK', Sales: 120 }, { Month: 'Feb', Sales: 150 }],
}

check('a real link round-trips unchanged', () => {
  assert.deepEqual(sanitizeShare(good), good)
})

check('missing parts → null', () => {
  assert.equal(sanitizeShare(null), null)
  assert.equal(sanitizeShare({ config: {}, columns: [], rows: [] }), null)
  assert.equal(sanitizeShare({ columns: good.columns, rows: good.rows }), null)
})

check('unknown chart type falls back to bar', () => {
  assert.equal(sanitizeShare({ ...good, config: { ...good.config, type: 'pwn' } }).config.type, 'bar')
})

check('non-colour palette entries are dropped and the defaults top it up', () => {
  const p = sanitizeShare({ ...good, config: { ...good.config, palette: ['url(https://x.example/t)', 'red;stroke:x', '#fff'] } })
  assert.deepEqual(p.config.palette, ['#fff', ...DEFAULT_PALETTE])
  const q = sanitizeShare({ ...good, config: { ...good.config, palette: [] } })
  assert.deepEqual(q.config.palette, DEFAULT_PALETTE)
})

check('axes must name real columns', () => {
  const p = sanitizeShare({ ...good, config: { ...good.config, xKey: 'Nope', yKeys: ['Sales', 'Ghost', 7] } })
  assert.equal(p.config.xKey, 'Month')
  assert.deepEqual(p.config.yKeys, ['Sales'])
})

check('cells: only strings and finite numbers, only known columns', () => {
  const p = sanitizeShare({ ...good, rows: [{ Month: { evil: 1 }, Sales: Infinity, Extra: 'x' }] })
  assert.deepEqual(p.rows, [{}])
})

check('__proto__ and duplicate column names are dropped', () => {
  const p = sanitizeShare({ ...good, columns: [...good.columns, { name: '__proto__', numeric: false }, { name: 'Sales', numeric: false }] })
  assert.deepEqual(p.columns, good.columns)
})

check(`rows are capped at ${MAX_ROWS}`, () => {
  const rows = Array.from({ length: MAX_ROWS + 50 }, (_, i) => ({ Month: String(i), Sales: i }))
  assert.equal(sanitizeShare({ ...good, rows }).rows.length, MAX_ROWS)
})

if (failures) {
  console.error(`\n${failures} failed`)
  process.exit(1)
}
console.log('\nall passed')
