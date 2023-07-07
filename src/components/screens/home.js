import styles from '../styles/home.module.css'
import NavButton from '../features/navButton.js'


function Home({events}) {
    return(
        <div className={styles.main}>
            Home
            <NavButton path={"/events"} text={"Events"}/>
        </div>
    )

}

export default Home