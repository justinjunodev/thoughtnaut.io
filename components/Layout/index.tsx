import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
