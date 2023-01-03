import styles from './header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>
        <Link href="/">Thoughtnaut</Link>
      </h1>
    </header>
  )
}

export default Header