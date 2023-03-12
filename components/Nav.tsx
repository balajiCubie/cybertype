import { twitterIcon } from './icons'
import styles from '../styles/Nav.module.scss'
import { memo } from 'react'

export const Nav = memo(function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.appName}>Cuvisoft_</div>

      <a
        href="https://twitter.com/cuvisoft_"
        target="_blank"
        rel="noreferrer"
        className={styles.twitter}
        aria-label="Twitter of the creator"
      >
        {twitterIcon}
      </a>
    </nav>
  )
})
