import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Chaitanya Granite and Marbles</Link>
      </div>
      <div className={styles.navLink}>
        <Link className={styles.productNav} href="/products">Our Products</Link>
        <Link className={styles.aboutNav} href="/about">About Us</Link>
        <Link className={styles.contactNav} href="/contact">Contact Us</Link>
      </div>
    </header>
  )
}

export default Header