import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Balancer from 'react-wrap-balancer'
import { trackGoal } from 'fathom-client'
import Layout from '@/components/Layout'
import Button from '@/components/Button'

const Home = () => {
  const [isClicked, setIsClicked] = useState(false)
  const router = useRouter()

  function handleClick() {
    setIsClicked(true)

    if (process.env.NODE_ENV === 'production') {
      trackGoal(process.env.NEXT_PUBLIC_FATHOM_SESSION_STARTED as string, 0)
    }

    setTimeout(() => {
      router.push('/session')
    }, 250)
  }

  return (
    <Layout>
      <h2 className="main__heading main__heading-lead">
        <Balancer>Explore your mind.</Balancer>
      </h2>
      <p className="main__copy main__copy-lead">
        <Balancer ratio={0.2}>
          Navigate your thoughts with Thoughtnaut. A journaling companion that
          will explore your mind and help you find clarity. Start a session now,
          it&apos;s free. No account required.
        </Balancer>
      </p>
      <Button handleClick={() => handleClick()}>
        {isClicked ? 'Loading...' : 'Start Session'}
      </Button>
      <p className="main__copy">
        First time?{' '}
        <Link href="/learn" className="main__link">
          Learn about our sessions.
        </Link>
      </p>
    </Layout>
  )
}

export default Home
