import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blefony Hot Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Hot Links by <a href="https://instagram.com/blefony">Blefony</a>
        </h1>

        <p className={styles.description}>
          More links and languages –{' '}
          <code className={styles.code}>soon</code>
        </p>

        <div className={styles.grid}>
          <a href="https://war.ukraine.ua/donate" className={styles.card}>
            <h2> Donate to Ukraine defenders &rarr;</h2>
            <p>Official web resources.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://instagram.com/blefony"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <a href="https://instagram.com/blefony">Blefony</a>
        </a>
      </footer>
    </div>
  )
}
