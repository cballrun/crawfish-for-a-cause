import styles from '../styles/events.module.css'
import NavButton from '../features/navButton.js'

function Events({events}) {
    

    return(
        <div className={styles.main}>
            <NavButton path={"/"} text={"Home"}/>
            <NavButton path={"/events"} text={"Events"}/>
            <NavButton path={"/mission"} text={"Mission"}/>
            <NavButton path={"/gallery"} text={"Gallery"}/>
        </div>
    )

}
  
export default Events