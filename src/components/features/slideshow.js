import styles from '../styles/slideshow.module.css'
import Slideshow1 from '../images/SlideShow1.jpg'
import Slideshow2 from '../images/SlideShow2.jpg'
import Slideshow3 from '../images/SlideShow3.jpg'
import Slideshow4 from '../images/SlideShow4.jpg'
import Slideshow5 from '../images/SlideShow5.jpg'
import Slideshow7 from '../images/SlideShow7.jpg'
import Slideshow8 from '../images/SlideShow8.jpg'
import Slideshow9 from '../images/SlideShow9.jpg'
import LeftArrow from '../images/left-arrow.png'
import RightArrow from '../images/right-arrow.png'
import { useState } from 'react'

function Slideshow() {
  const slides = [
   Slideshow1,
   Slideshow2,
   Slideshow3,
   Slideshow4,
   Slideshow5,
   Slideshow7,
   Slideshow8,
   Slideshow9
  ]

  const [activeSlide, setActiveSlide] = useState(0)

  const changeSlide = (direction) => {
    if(activeSlide !== 7 && direction === "increment") {
      var newSlide = activeSlide + 1

      setActiveSlide(newSlide)
    }
    else if(activeSlide !== 0) {
      var newSlide = activeSlide - 1

      setActiveSlide(newSlide)
    }
  }

  return(
    <div className={styles.main}>
      <img
        className={styles.slideImage} 
        src={slides[activeSlide]}
        />
      <div className={styles.nav}>
        <img 
          src={LeftArrow}
          className={activeSlide !== 0 ? styles.arrow : styles.inactiveArrow}
          onClick={() => changeSlide("decrement")}
          />
        <img 
          src={RightArrow}
          className={activeSlide !== 7 ? styles.arrow : styles.inactiveArrow}
          onClick={() => changeSlide("increment")}
          />
      </div>
    </div>
  )
}

export default Slideshow