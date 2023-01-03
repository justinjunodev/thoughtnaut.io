import styles from './active.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Balancer from 'react-wrap-balancer'
import { trackGoal } from 'fathom-client'
import { PromptsRecord } from '@/utils/xata'

interface ActiveSessionProps {
  prompts: PromptsRecord[]
}

const ActiveSession = ({ prompts }: ActiveSessionProps) => {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const router = useRouter()

  function incrementPrompt() {
    if (currentPrompt === 4) {
      if (process.env.NODE_ENV === 'production') {
        trackGoal(process.env.NEXT_PUBLIC_FATHOM_SESSION_ENDED as string, 0)
      }

      router.push('/success')
    } else {
      setCurrentPrompt(currentPrompt + 1)
    }
  }

  function decrementPrompt() {
    setCurrentPrompt(currentPrompt - 1)
  }

  return (
    <>
      <h2>
        <Balancer>Prompt {currentPrompt + 1} of 5</Balancer>
      </h2>
      <p>
        <Balancer ratio={0.2}>{prompts[currentPrompt].prompt}</Balancer>
      </p>
      <button
        type="button"
        onClick={() => decrementPrompt()}
        disabled={currentPrompt === 0 ? true : false}
      >
        Previous
      </button>
      <button type="button" onClick={() => incrementPrompt()}>
        Next
      </button>
      <p>
        <Link href="/" className={styles.subcopyLink}>
          Leave Session
        </Link>
      </p>
    </>
  )
}

export default ActiveSession
