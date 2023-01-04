import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import Layout from '@/components/Layout'

const PageNotFound = () => {
  return (
    <Layout>
      <h2 className="main__heading">
        <Balancer>Well that didn&apos;t work.</Balancer>
      </h2>
      <p className="main__copy">
        <Balancer ratio={0.75}>
          The page you are looking cannot be found or our platform could be
          experiencing some technical difficulties. Please try again later or{' '}
          <Link href="/" className="main__link">
            return home
          </Link>
          .
        </Balancer>
      </p>
    </Layout>
  )
}

export default PageNotFound
