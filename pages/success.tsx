import Balancer from 'react-wrap-balancer'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

const Success = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <h2 className="main__heading main__heading-lead">
        <Balancer>Session complete.</Balancer>
      </h2>
      <p className="main__copy main__copy-lead">
        <Balancer ratio={0.2}>
          Thanks for exploring your mind with Thoughtnaut. If you enjoyed your
          session today, tell others about it on:
        </Balancer>
      </p>
      <ul className="main__copy main__copy-list">
        <li>
          <a
            className="main__link"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A//thoughtnaut.io/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            className="main__link"
            href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//thoughtnaut.io/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="main__link"
            href="https://twitter.com/intent/tweet?text=Ready%20to%20explore%20your%20mind?%20Try%20Thoughtnaut,%20a%20free%20journaling%20companion%20by%20%40justinjunodev.%20%0A%0Ahttps%3A//thoughtnaut.io/%20%E2%9C%8D%EF%B8%8F%20"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Success
