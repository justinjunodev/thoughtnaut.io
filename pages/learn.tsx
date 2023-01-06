import Balancer from 'react-wrap-balancer'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

const Learn = () => {
  return (
    <Layout>
      <SEO title="Learn" />
      <h2 className="main__heading">
        <Balancer>How do sessions work?</Balancer>
      </h2>
      <p className="main__copy">
        <Balancer ratio={0.75}>
          All journaling sessions contain five writing prompts. Starting with
          three daily prompts to set a foundation for your session and plan your
          day. Followed by two special prompts that&apos;ll go much deeper and
          differ with each session. These are great for self-discovery and will
          help you explore your mind.
        </Balancer>
      </p>
      <hr className="main__divider" />
      <h2 className="main__heading">
        <Balancer>Where do I write my responses?</Balancer>
      </h2>
      <p className="main__copy">
        <Balancer ratio={0.75}>
          Thoughtnaut is a journaling companion that provides free writing
          prompts. You can record your responses in a physical journal or
          writing app.
        </Balancer>
      </p>
      <hr className="main__divider" />
      <h2 className="main__heading">
        <Balancer>How can I support Thoughtnaut?</Balancer>
      </h2>
      <p className="main__copy">
        <Balancer ratio={0.75}>
          Thoughtnaut is an open-source project built and maintained by{' '}
          <a
            href="https://justinjuno.dev"
            target="_blank"
            rel="noreferrer"
            className="main__link"
          >
            Justin Juno
          </a>
          . Contributions and suggestions are always welcome via{' '}
          <a
            href="https://github.com/justinjunodev/thoughtnaut.io"
            target="_blank"
            rel="noreferrer"
            className="main__link"
          >
            GitHub
          </a>{' '}
          or{' '}
          <a
            href="https://twitter.com/justinjunodev"
            target="_blank"
            rel="noreferrer"
            className="main__link"
          >
            Twitter
          </a>
          .
        </Balancer>
      </p>
    </Layout>
  )
}

export default Learn
