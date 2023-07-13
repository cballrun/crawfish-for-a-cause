import styles from '../styles/gallery.module.css'
import Header from '../features/header'

function Gallery({events}) {
    return(
        <div className={styles.header} >
            <Header/>
        </div>

    )

}

export default Gallery