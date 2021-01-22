
import styles from '../styles/Home.module.css'

export default function Card({url, title, text, design}) {
    
    return (
        
        <a href={url} className={  [styles.card , design].join(' ')  }>
            <h3>{title} &rarr;</h3>
            <p>{text}</p>
        </a>
    )
}