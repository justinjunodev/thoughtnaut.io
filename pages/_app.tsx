import '@/styles/reset.css'
import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import * as Fathom from 'fathom-client'

Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    Fathom.trackPageview()
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID as string, {
      includedDomains: ['thoughtnaut.io'],
    })
  }, [])

  return <Component {...pageProps} />
}

export default App
