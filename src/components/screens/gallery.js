import styles from '../styles/gallery.module.css'
import NavButton from '../features/navButton.js'

function Gallery({events}) {
    return(
        <div className={styles.main}>
            <NavButton path={"/"} text={"Home"}/>
            <NavButton path={"/events"} text={"Events"}/>
            <NavButton path={"/mission"} text={"Mission"}/>
            <NavButton path={"/gallery"} text={"Gallery"}/>
        </div>
    )

}

export default Gallery