import styles from './welcome.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Balancer from 'react-wrap-balancer'

const Welcome = () => {
  const router = useRouter()

  function handleClick() {
    router.push('/session')
  }

  return (
    <>
      <h2 className={styles.heading}>Explore your mind.</h2>
      <p className={styles.copy}>
        <Balancer ratio={0.4}>
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
