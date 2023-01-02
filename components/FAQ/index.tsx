import styles from './faq.module.css'
import Balancer from 'react-wrap-balancer'

const FAQ = () => {
  return (
    <>
      <h2 className={styles.heading}>How do sessions work?</h2>
      <p className={styles.copy}>
        <Balancer>
          All journaling sessions contain five writing prompts. Starting with
          three daily prompts to set a foundation for your session and plan your
          day. Followed by two special prompts that&apos;ll go much deeper and
          differ with each session. These are great for self-discovery and will
          help you explore your mind.
        </Balancer>
      </p>
      <div className={styles.divider} />
      <h2 className={styles.heading}>Where do I write my responses?</h2>
      <p className={styles.copy}>
        <Balancer>
          Thoughtnaut is a journaling companion that provides free writing
          prompts. You can record your responses in a physical journal or
          writing app.
        </Balancer>
      </p>
      <div className={styles.divider} />
      <h2 className={styles.heading}>How can I support Thoughtnaut?</h2>
      <p className={styles.copy}>
        <Balancer>
          Thoughtnaut is an open-source project built and maintained by{' '}
          <a
            href="https://justinjuno.dev"
            className={styles.copyLink}
            target="_blank"
            rel="noreferrer"
          >
            Justin Juno
          </a>
          . Contributions and suggestions are always welcome via{' '}
          <a
            href="https://github.com/justinjunodev/thoughtnaut.io"
            className={styles.copyLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{' '}
          or{' '}
          <a
            href="https://twitter.com/justinjunodev"
            className={styles.copyLink}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          .
        </Balancer>
      </p>
    </>
  )
}

export default FAQ
