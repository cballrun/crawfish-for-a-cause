import styles from '../styles/gallery.module.css'
import Header from '../features/header'
import Footer from '../features/footer'

function Gallery({events}) {
    return(
        <div className={styles.header} >
            <Header/>
                <div className={styles.footer} >
                    <Footer/>
                </div>
        </div>

    )

}

export default Gallery