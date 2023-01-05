import Balancer from 'react-wrap-balancer'
import Layout from '@/components/Layout'

const Success = () => {
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
    </Layout>
  )
}

export default Success
