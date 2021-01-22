
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Blog() {
  return (
    <div className={styles.container}>
    <main className = {styles.main}>
      <Card title = "Sample Article" text= "blurb goes here" design = {styles.bandark}/>
      </main>
      <Footer />
    </div>
  )
 }
