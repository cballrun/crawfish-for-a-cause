import mikeyCrawfish from '../images/mikeyCrawfish.png'
import styles from '../styles/logo.module.css'

function Logo() {
    return (
      <div className={styles.logoContainer}>
        <img src={mikeyCrawfish} alt="Mikey Crawfish Logo" className={styles.logoImage} />
      </div>
    );
  }

  export default Logo