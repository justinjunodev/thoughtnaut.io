import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as Fathom from 'fathom-client'

const useAnalytics = () => {
  const router = useRouter()
  const siteDomain = 'thoughtnaut.io'
  const siteUrl = `www.${siteDomain}`

  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      process.env.NEXT_PUBLIC_FATHOM_SITE_ID
    ) {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: [siteDomain, siteUrl],
      })
    }

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events, siteDomain, siteUrl])
}

export default useAnalytics
