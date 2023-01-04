import { useState } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { trackGoal } from 'fathom-client'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Balancer from 'react-wrap-balancer'
import { XataClient, PromptsRecord } from '@/utils/xata'
import Layout from '@/components/Layout'

interface SessionProps {
  prompts: PromptsRecord[]
}

const Session = ({ prompts }: SessionProps) => {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const router = useRouter()

  function handleClick() {
    if (process.env.NODE_ENV === 'production') {
      trackGoal(process.env.NEXT_PUBLIC_FATHOM_SESSION_ENDED as string, 0)
    }

    router.push('/success')
  }
  return (
    <Layout>
      <h2 className="main__heading">Prompt {currentPrompt + 1} of 5</h2>
      <p className="main__copy-lead">
        <Balancer>{prompts[currentPrompt].prompt}</Balancer>
      </p>
      {currentPrompt >= 4 ? (
        <button
          type="button"
          onClick={() => handleClick()}
          className="main__button"
        >
          Complete Session
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setCurrentPrompt(currentPrompt - 1)}
            className="main__button main__button-round"
          >
            <GrFormPrevious size="2.2rem" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentPrompt(currentPrompt + 1)}
            className="main__button main__button-round"
          >
            <GrFormNext size="2.2rem" />
          </button>
          <p className="main__copy">
            <Link href="/" className="main__link">
              Leave Session
            </Link>
          </p>
        </>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const xata = new XataClient({ apiKey: process.env.XATA_API_KEY })
  const prompts = await xata.db.prompts.getAll()
  const daily = prompts?.filter((prompt) => prompt.is_daily)
  const special = prompts?.filter((prompt) => !prompt.is_daily)

  const a = Math.floor(Math.random() * special?.length)
  let b = Math.floor(Math.random() * special?.length)
  b == a ? (b = Math.floor(Math.random() * special?.length)) : b

  if (!prompts) {
    return {
      notFound: true,
    }
  }

  return { props: { prompts: [...daily, special[a], special[b]] } }
}

export default Session
