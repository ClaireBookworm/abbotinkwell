
import styles from '../styles/Home.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer}>
        <a href="./">
        Go home{' '}
        <img src="/newyorktimes.svg" alt="News Logo" className={styles.logo} />
        </a>
        </footer>
    )
}