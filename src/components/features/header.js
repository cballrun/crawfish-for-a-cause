import styles from '../styles/header.module.css'
import NavBar from './navBar'
import Logo from './logo'

function Header() {

    
    return (
        <div className={styles.header}>
          <Logo />
          
          <div className={styles.headerText}>
   
            <div className={styles.topWord}>CRAWFISH</div>
            <div className={styles.bottomWords}>
              FOR A
              <div className={styles.lastWord}>
                CAUSE
              </div>
            </div>
            <NavBar />
          </div>
        </div>
      );
    }

export default Header
