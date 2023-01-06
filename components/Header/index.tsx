import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__wordmark">
        <Link href="/">Thoughtnaut</Link>
      </h1>
    </header>
  )
}

export default Header
