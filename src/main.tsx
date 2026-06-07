import React from 'react'
import ReactDOM from 'react-dom/client'
import { UniversalProvider } from '@unisim/sdk'
import type { ProductCode } from '@unisim/sdk'
import App from './App'
import './index.css'

// Universal Charts is a client-only tool — data never leaves the browser. We
// still mount <UniversalProvider> so the shared navbar works and, when the
// visitor is signed in on .unisim.co.uk, useOrgBranding can tint the palette
// with their brand colour. Real platform creds are read from env (with safe
// placeholders) and the cookieDomain lets the SSO session be read; the app
// never writes anything to Supabase.
const universalConfig = {
  supabaseUrl: import.meta.env.VITE_PLATFORM_SUPABASE_URL || 'https://placeholder.supabase.co',
  supabaseAnonKey: import.meta.env.VITE_PLATFORM_SUPABASE_ANON_KEY || 'public-anon-placeholder',
  // 'charts' is added to the SDK's ProductCode union in this same change but
  // isn't in the published package yet — cast until the SDK is republished
  // (mirrors how Universal QR shipped 'qr').
  product: 'charts' as unknown as ProductCode,
  cookieDomain: import.meta.env.PROD ? '.unisim.co.uk' : undefined,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UniversalProvider config={universalConfig}>
      <App />
    </UniversalProvider>
  </React.StrictMode>
)
