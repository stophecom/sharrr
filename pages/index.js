import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sharrr. Share end-to-end encrypted files.</title>
        <meta
          name="description"
          content="Pirates don't share, pirates sharrr. Share end-to-end encrypted files."
        />
        <meta
          name="keywords"
          content="pirates, share file, end-to-end encrypted file sharing, pirates sharrr, arrr"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1
          className={styles.title}
        >{`Pirates don't share, pirates sharrr.`}</h1>

        <p className={styles.description}>
          This website is work in progress. Use{' '}
          <a href="https://scrt.link">scrt.link</a> for now.
        </p>
      </main>
    </div>
  )
}
