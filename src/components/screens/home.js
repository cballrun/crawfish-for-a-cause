import styles from '../styles/home.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer'


function Home({events}) {
    return(
    
    <div className={styles.header} >
        <Header/>
            <div className={styles.footer} >
                <Footer/>
            </div>
    </div>

    )

}

export default Home