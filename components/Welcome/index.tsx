import styles from './welcome.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Balancer from 'react-wrap-balancer'
import { trackGoal } from 'fathom-client'

const Welcome = () => {
  const router = useRouter()

  function handleClick() {
    if (process.env.NODE_ENV === 'production') {
      trackGoal(process.env.NEXT_PUBLIC_FATHOM_SESSION_STARTED as string, 0)
    }

    router.push('/session')
  }

  return (
    <>
      <h2 className={styles.heading}>
        <Balancer>Explore your mind.</Balancer>
      </h2>
      <p className={styles.copy}>
        <Balancer ratio={0.2}>
          Navigate your thoughts with Thoughtnaut. A journaling companion that
          will explore your mind and help you find clarity. Start a session now,
          it&apos;s free. No account required.
        </Balancer>
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={() => handleClick()}
      >
        Start Session
      </button>
      <p className={styles.subcopy}>
        First time?{' '}
        <Link href="/learn" className={styles.subcopyLink}>
          Learn about our sessions.
        </Link>
      </p>
    </>
  )
}

export default Welcome
