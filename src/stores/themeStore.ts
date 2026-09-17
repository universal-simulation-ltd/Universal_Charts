import { createThemeStore, type ThemePref } from '@unisim/sdk'

// The light/dark/system preference. The store itself lives in @unisim/sdk
// (createThemeStore, since 0.140.0) — this file only names the key. It opens
// LIGHT and stays light until the user chooses otherwise (the suite rule): a
// fresh profile on a laptop set to dark still opens light; only an explicit
// Dark or System choice changes that.
//
// Since SDK 0.143 the key holds this app's OVERRIDE, chosen in App preferences
// (App.tsx passes this store to the navbar as `themeStore`). Absent — "Follow
// global" — the app uses the suite-wide colour scheme from Global preferences,
// `universal:color-scheme`, which is light until chosen.
//
// ⚠️ The key is every user's saved choice for this app. Renaming it silently
// puts them all back to following global. It is also DUPLICATED in the
// pre-paint <script> in `index.html`, which reads it (then the global key)
// before the bundle loads — change both or neither.
export type { ThemePref }

export const useThemeStore = createThemeStore('unisim-charts-theme')
