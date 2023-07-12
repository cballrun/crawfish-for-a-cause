import styles from '../styles/events.module.css'
import NavBar from '../features/navBar'

function Events({events}) {
  
    return(
        <div className={styles.main}>
          <NavBar/>
        </div>
    )

}
  
export default Events