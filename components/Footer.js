
import styles from '../styles/Home.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer}>
        <a href="./">
        Back to Home Page{' '}
        <img src="/newyorktimes.svg" alt="News Logo" className={styles.logo} />
        </a>
        </footer>
    )
}