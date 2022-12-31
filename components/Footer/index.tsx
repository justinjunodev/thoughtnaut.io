import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <span className={styles.copyright}>
        All Rights Reserved &copy; {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer
