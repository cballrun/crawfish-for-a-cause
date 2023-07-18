import styles from '../styles/navBar.module.css'
import NavButton from './navButton'

function NavBar() {
  return (
    <div className={styles.navBar}>
        <NavButton path={"/"} text={"HOME"}/>
        <NavButton path={"/events"} text={"EVENTS"}/>
        <NavButton path={"/about"} text={"ABOUT"}/>
        <NavButton path={"/gallery"} text={"GALLERY"}/>
    </div>

  )
}
export default NavBar