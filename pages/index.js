import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yan Kyaw Moe's Portfolio</title>
        <meta name="description" content="yan kyaw moe's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My Portfolio!</a>
        </h1>

        
      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          
      </footer>
    </div>
  )
}
