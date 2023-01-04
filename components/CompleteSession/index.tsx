import styles from './complete.module.css'
import Balancer from 'react-wrap-balancer'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CompleteSession = () => {
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false)

  return (
    <>
      <h2 className={styles.heading}>
        <Balancer>Session complete.</Balancer>
      </h2>
      <p className={styles.copy}>
        <Balancer ratio={0.2}>
          Thanks for exploring your mind with Thoughtnaut. If you enjoyed your
          session today, consider telling others about it.
        </Balancer>
      </p>
      <CopyToClipboard
        text="https://thoughtnaut.io"
        onCopy={() => setIsCopiedToClipboard(true)}
      >
        <button type="button" className={styles.button}>
          {isCopiedToClipboard ? 'Link Copied' : 'Copy Link'}
        </button>
      </CopyToClipboard>
    </>
  )
}

export default CompleteSession
