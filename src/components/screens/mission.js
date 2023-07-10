import styles from '../styles/mission.module.css'
import NavButton from '../features/navButton.js'

function Mission({events}) {
    return(
        <div className={styles.main}>
            <NavButton path={"/home"} text={"Home"}/>
            <NavButton path={"/events"} text={"Events"}/>
            <NavButton path={"/mission"} text={"Mission"}/>
            <NavButton path={"/gallery"} text={"Gallery"}/>
        </div>
    )

}

export default Mission