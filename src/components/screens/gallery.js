import styles from '../styles/gallery.module.css'
import NavBar from '../features/navBar.js'

function Gallery({events}) {
    return(
        <div className={styles.main}>
          <NavBar/>
        </div>
    )

}

export default Gallery