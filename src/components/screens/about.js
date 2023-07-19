import styles from '../styles/mission.module.css'
import Header from '../features/header'
import Footer from '../features/footer'

function About({events}) {
    return(
        <div className={styles.main} >
            <Header/>
            <Footer/>
        </div>
    )

}

export default About