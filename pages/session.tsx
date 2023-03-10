import { useState } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { trackGoal } from 'fathom-client'
import { motion } from 'framer-motion'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Balancer from 'react-wrap-balancer'
import { XataClient, PromptsRecord } from '@/utils/xata'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import SEO from '@/components/SEO'

interface SessionProps {
  prompts: PromptsRecord[]
}

const Session = ({ prompts }: SessionProps) => {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const router = useRouter()

  // Track that the session has ended via Fathom.
  function handleClick() {
    if (process.env.NODE_ENV === 'production') {
      trackGoal(process.env.NEXT_PUBLIC_FATHOM_SESSION_ENDED as string, 0)
    }

    // Route user to success page.
    router.push('/success')
  }

  return (
    <Layout>
      <SEO title="Session" />
      <h2 className="main__heading">Prompt {currentPrompt + 1} of 5</h2>
      {prompts?.map((p, index) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentPrompt ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ display: index === currentPrompt ? 'block' : 'none' }}
        >
          <p className="main__copy-lead">
            <Balancer>{p.prompt}</Balancer>
          </p>
        </motion.div>
      ))}
      {currentPrompt >= 4 ? (
        <Button handleClick={() => handleClick()}>Complete Session</Button>
      ) : (
        <>
          <Button
            handleClick={() => setCurrentPrompt(currentPrompt - 1)}
            isRound={true}
            isDisabled={currentPrompt === 0}
            aria-label={
              currentPrompt === 0
                ? 'Previous writing prompt does not exist'
                : 'View previous writing prompt'
            }
          >
            <GrFormPrevious size="2.2rem" />
          </Button>
          <Button
            handleClick={() => setCurrentPrompt(currentPrompt + 1)}
            isRound={true}
            aria-label="View next writing prompt"
          >
            <GrFormNext size="2.2rem" />
          </Button>
          <p className="main__copy">
            <Link href="/learn" className="main__link">
              How do sessions work?
            </Link>
          </p>
        </>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  if (!process.env.XATA_API_KEY) {
    // If a Xata API key isn't present, return sample prompts.
    const samplePrompts = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      prompt: `This is sample writing prompt #${i + 1}?`,
    }))

    return { props: { prompts: samplePrompts } }
  } else {
    // Get all prompts from Xata and split into daily/ special groups.
    const xata = new XataClient({ apiKey: process.env.XATA_API_KEY })
    const prompts = await xata.db.prompts.getAll()
    const daily = prompts?.filter((prompt) => prompt.is_daily)
    const special = prompts?.filter((prompt) => !prompt.is_daily)

    // Randomly select two unique prompts from the special group.
    const a = Math.floor(Math.random() * special?.length)
    let b = Math.floor(Math.random() * special?.length)
    b == a ? (b = Math.floor(Math.random() * special?.length)) : b

    // If error, return 404.
    if (!prompts) {
      return {
        notFound: true,
      }
    }

    return { props: { prompts: [...daily, special[a], special[b]] } }
  }
}

export default Session
