import styles from './active.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Balancer from 'react-wrap-balancer'
import { trackGoal } from 'fathom-client'
import { PromptsRecord } from '@/utils/xata'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

interface ActiveSessionProps {
  prompts: PromptsRecord[]
}

const ActiveSession = ({ prompts }: ActiveSessionProps) => {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const router = useRouter()

  function handleClick() {
    if (process.env.NODE_ENV === 'production') {
      trackGoal(process.env.NEXT_PUBLIC_FATHOM_SESSION_ENDED as string, 0)
    }

    router.push('/success')
  }

  return (
    <>
      <h2 className={styles.heading}>Prompt {currentPrompt + 1} of 5</h2>
      <p className={styles.copy}>
        <Balancer ratio={0.75}>{prompts[currentPrompt].prompt}</Balancer>
      </p>
      {currentPrompt >= 4 ? (
        <button
          type="button"
          onClick={() => handleClick()}
          className={styles.button}
        >
          Complete Session
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setCurrentPrompt(currentPrompt - 1)}
            className={styles.buttonRound}
          >
            <GrFormPrevious />
          </button>
          <button
            type="button"
            onClick={() => setCurrentPrompt(currentPrompt + 1)}
            className={styles.buttonRound}
          >
            <GrFormNext />
          </button>
          <p className={styles.subcopy}>
            <Link href="/" className={styles.subcopyLink}>
              Leave Session
            </Link>
          </p>
        </>
      )}
    </>
  )
}

export default ActiveSession
