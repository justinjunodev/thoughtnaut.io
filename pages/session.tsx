import { GetServerSideProps } from 'next'
import { XataClient, PromptsRecord } from '@/utils/xata'
import Layout from '@/components/Layout'
import ActiveSession from '@/components/ActiveSession'

interface SessionProps {
  prompts: PromptsRecord[]
}

const Session = ({ prompts }: SessionProps) => {
  return (
    <Layout>
      <ActiveSession prompts={prompts} />
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
