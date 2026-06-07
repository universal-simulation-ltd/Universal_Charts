// Default series palette — the suite brand orange leading, then a balanced
// set that stays distinct on white. Org brand colours (when the visitor is
// signed in) are applied over the top in the store via useOrgBranding.

export const DEFAULT_PALETTE = [
  '#ea580c', // brand orange
  '#0ea5e9', // sky
  '#22c55e', // green
  '#a855f7', // violet
  '#f59e0b', // amber
  '#ef4444', // red
  '#14b8a6', // teal
  '#64748b', // slate
]

// Build a palette of at least `n` colours by cycling the base palette.
export function paletteOf(n: number, base: string[] = DEFAULT_PALETTE): string[] {
  if (n <= base.length) return base.slice(0, Math.max(1, n))
  return Array.from({ length: n }, (_, i) => base[i % base.length])
}
