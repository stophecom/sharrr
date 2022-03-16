import PlausibleProvider from 'next-plausible'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="sharrr.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
