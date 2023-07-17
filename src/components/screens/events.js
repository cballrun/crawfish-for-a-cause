import styles from '../styles/events.module.css'
import Header from '../features/header'
import Footer from '../features/footer'

function Events({events}) {
  
    return(
        <div className={styles.header} >
            <Header/>
                <div className={styles.footer} >
                    <Footer/>
                </div>
        </div>


    )

}
  
export default Events