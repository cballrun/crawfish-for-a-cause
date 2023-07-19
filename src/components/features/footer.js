import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <text className={styles.footerText}>
                GOOD FOOD. 
            </text>
            <text className={styles.footerTextMid}>
               GOOD MUSIC.
            </text>
            <text className={styles.footerText}>
               GOOD FUN.
            </text>
        </div>
    )
}

export default Footer