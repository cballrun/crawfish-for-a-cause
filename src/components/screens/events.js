import styles from '../styles/events.module.css'
import Header from '../features/header'
import Footer from '../features/footer'

function Events({events}) {
  
    return(
        <div className={styles.main} >
            <Header/>
            <Footer/>
        </div>

    )

}
  
export default Events