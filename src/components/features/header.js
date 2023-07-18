import styles from '../styles/header.module.css'
import NavBar from './navBar'
import Logo from './logo'

function Header() {
    const bottomWords = "FOR A CAUSE";
    const words = bottomWords.split(" ");
    
    return (
        <div className={styles.header}>
          <Logo />
          <NavBar />
          <div className={styles.headerText}>
            <span className={styles.topWord}>CRAWFISH</span>
            <span className={styles.bottomWords}>
              {words.slice(0, -1).join(" ")}{" "}
              <span className={styles.lastWord}>{words[words.length - 1]}</span>
            </span>
          </div>
        </div>
      );
    }

export default Header
