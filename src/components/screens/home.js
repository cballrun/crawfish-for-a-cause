import styles from '../styles/home.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer'
import Slideshow from '../features/slideshow.js'

function Home({events}) {
    return(
        <div className={styles.main} >
            <Header/>

              <div className={styles.bodyHeader}>
                Mental Health Awakening 2023
              </div>
              <div className={styles.bodySubheader}>
                5 Bands | 2 Stages | 1 Million in Attendance | Over $20 Million Raised
              </div>
              <div className={styles.lowerBody}>
                <Slideshow/>
                <div className={styles.mission}>
                  <div className={styles.statement}>
                    Community Enrichment Through
                  </div>
                  <div className={styles.statement}>
                    Seafood & Music
                  </div>
                  <div className={styles.details}>
                    Holding local music festivals with up & coming talent from 
                    the surrounding music scene, while providing a safe place for folks
                    to enjoy good times, cold drinks & fresh seafood. All  
                    proceeds are focused on providing widespread accessibility 
                    to mental health counselors in the local community; particularly children & young adults 
                    in primary school.
                  </div>

                </div>
              </div>
            <Footer/>
        </div>

    )

}

export default Home