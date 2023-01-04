import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Balancer from 'react-wrap-balancer'
import Layout from '@/components/Layout'

const Learn = () => {
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false)

  return (
    <Layout>
      <h2 className="main__heading main__heading-lead">
        <Balancer>Session complete.</Balancer>
      </h2>
      <p className="main__copy main__copy-lead">
        <Balancer ratio={0.2}>
          Thanks for exploring your mind with Thoughtnaut. If you enjoyed your
          session today, consider telling others about it.
        </Balancer>
      </p>
      <CopyToClipboard
        text="https://thoughtnaut.io"
        onCopy={() => setIsCopiedToClipboard(true)}
      >
        <button type="button" className="main__button">
          {isCopiedToClipboard ? 'Link Copied' : 'Copy Link'}
        </button>
      </CopyToClipboard>
    </Layout>
  )
}

export default Learn
