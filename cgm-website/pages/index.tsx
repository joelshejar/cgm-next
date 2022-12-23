import Head from 'next/head'
import type { NextPage } from 'next'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'
import Header from '../components/Header'

const Home:NextPage=()=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chaitanya Granite and Marbles</title>
        <meta name="description" content="Granite and marbles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.menu}>
        <section className={styles.menuHero}>
          <div>
            <p>Chaitanya Granite and marbles store</p>
            <h1>Influential, Innovative and unique stones from Europe</h1>
            <h2>CGM provides a premium selection of porcelain with a uniwue design and color scheme that will express your individuality. CGM reinventing a wholly modern approach to interior design</h2> 
          </div>
          <div className={styles.menuImage}>
          <Image src={"/static/homeBanner.jpg"} alt= "Marble in landing page" height={500} width={500}/>
          </div>
          
        </section>
      </main>
    </div>
  )
}

export default Home
