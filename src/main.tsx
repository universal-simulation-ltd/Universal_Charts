import React from 'react'
import ReactDOM from 'react-dom/client'
import { UniversalProvider } from '@unisim/sdk'
import type { ProductCode } from '@unisim/sdk'
import App from './App'
import './index.css'

// Universal Charts is a client-only tool — data never leaves the browser. We
// still mount <UniversalProvider> so the shared navbar works.
//
// No accounts (privacy audit 2026-10-12): `noAccounts: true`, no org
// brand-colour read. The one thing that reaches Supabase is the SDK user count
// (`presence`: a random install id kept in this browser plus the kind of
// device, every 45 s while the page is open and in view), set explicitly and
// described in the "privacy-and-sharing" article and README → Privacy.
//
// The fallback is the REAL public suite project (publishable anon key — safe to
// ship; RLS is the security boundary). A placeholder fallback left the SDK on a
// dead project when the build lacked VITE_PLATFORM_SUPABASE_* env, so the suite
// session never resolved and the navbar showed no profile/avatar. Env overrides.
const universalConfig = {
  supabaseUrl: import.meta.env.VITE_PLATFORM_SUPABASE_URL || 'https://rygfxgalojojppxmhddo.supabase.co',
  supabaseAnonKey: import.meta.env.VITE_PLATFORM_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Z2Z4Z2Fsb2pvanBweG1oZGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NTY4MjUsImV4cCI6MjA5NDMzMjgyNX0.hLy_vt9vY_rdPKF3nL32yAuMCD604E3CH5VM7D7CaNE',
  // 'charts' is added to the SDK's ProductCode union in this same change but
  // isn't in the published package yet — cast until the SDK is republished
  // (mirrors how Universal QR shipped 'qr').
  product: 'charts' as unknown as ProductCode,
  noAccounts: true,
  presence: true,
  cookieDomain: import.meta.env.PROD ? '.unisim.co.uk' : undefined,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UniversalProvider config={universalConfig}>
      <App />
    </UniversalProvider>
  </React.StrictMode>
)
