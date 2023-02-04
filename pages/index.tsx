import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Speed Machine</title>
        <meta name="description" content="Fastest Website In The World" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <p>
            <code className={styles.code}>It&apos;s the fastest website ever!</code>
          </p>
        </div>
      </main>
    </>
  )
}
