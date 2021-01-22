import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abbot Inkwell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the 🖋 <a href="https://abbot.ink">Abbot Inkwell</a>!
        </h1>
        <br />

        <p className = "subtitle">
          Hello! This is a subtitle about abbot!!! We'll replace this with actual content once we get there.
        </p>

        <div className={styles.grid}>
          <Card url="https://andover.edu" title="🏫 Andover" text="Our School!" design = {styles.bluer} />
          <Card url="https://andover.edu" title="🎳 Team" text="The people behind this website." design = {styles.lemonade} />
          <Card url="/blog" title="📰 Articles" text="Blog posts and news from Abbot!"/>
          <Card url="https://andover.edu" title="The Team" text="The people behind this website."/>
        </div>
        <p>Join our Substack Newsletter!</p>
        <iframe src="https://abbotink.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>

      </main>
      
      <Footer />
    </div>
  )
}
