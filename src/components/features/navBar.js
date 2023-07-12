import styles from '../styles/navBar.module.css'
import NavButton from './navButton'

function NavBar() {
  return (
    <div className={styles.navBar}>
        <NavButton path={"/"} text={"Home"}/>
        <NavButton path={"/events"} text={"Events"}/>
        <NavButton path={"/mission"} text={"Mission"}/>
        <NavButton path={"/gallery"} text={"Gallery"}/>
    </div>

  )
}
export default NavBar