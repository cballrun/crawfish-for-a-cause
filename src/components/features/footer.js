import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <text className={styles.footerText}>
                Good Food. 
            </text>
            <text className={styles.footerTextMid}>
               Good Music.
            </text>
            <text className={styles.footerText}>
               Good Fun.
            </text>
        </div>
    )
}

export default Footer