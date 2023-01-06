import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Header />
      <motion.main
        className="main"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout
