import Head from 'next/head'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'

const Products:NextPage=()=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chaitanya Granite and Marbles</title>
        <meta name="description" content="Granite and marbles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>

        <section>
          Products buddies
        </section>
      </main>
    </div>
  )
}

export default Products