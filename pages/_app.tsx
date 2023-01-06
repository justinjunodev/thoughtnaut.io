import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import * as Fathom from 'fathom-client'
import '@/styles/reset.css'
import '@/styles/fonts.css'
import '@/styles/globals.css'

Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    Fathom.trackPageview()
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID as string, {
      includedDomains: ['thoughtnaut.io', 'www.thoughtnaut.io'],
      url: 'https://twentythree-ecstatic.thoughtnaut.io/script.js',
    })
  }, [])

  return <Component {...pageProps} />
}

export default App
