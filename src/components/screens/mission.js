import styles from '../styles/mission.module.css'
import NavBar from '../features/navBar.js'

function Mission({events}) {
    return(
        <div className={styles.main}>
          <NavBar/>
        </div>
    )

}

export default Mission