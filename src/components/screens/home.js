import styles from '../styles/home.module.css'
import Header from '../features/header.js'


function Home({events}) {
    return(
    
    <div className={styles.header} >
        <Header/>
    </div>

    )

}

export default Home