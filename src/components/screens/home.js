import styles from '../styles/home.module.css'
import NavButton from '../features/navButton.js'


function Home({events}) {
    return(
        <div className={styles.main}>
            <NavButton path={"/home"} text={"Home"}/>
            <NavButton path={"/events"} text={"Events"}/>
            <NavButton path={"/mission"} text={"Mission"}/>
            <NavButton path={"/gallery"} text={"Gallery"}/>
        </div>
    )

}

export default Home