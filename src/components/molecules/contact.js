import styles from "./css/contact.module.css"
import Title from "../atoms/title.js"
import Text from "../atoms/text.js"
import { useEffect, useState } from "react"

const Contact = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // This runs when the component mounts and updates `isMobile`
    const isMobileWidth = window.innerWidth <= 640
    setIsMobile(isMobileWidth)
  }, [])

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileWidth = window.innerWidth <= 640
      setIsMobile(isMobileWidth)
    }

    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])


  return(
    <div className={styles.contactContainer}>
      <Title>Contact us</Title>
      <div className={styles.contacts}>
        <Text>+359 89 977 4964</Text>
        <Text>IandF.barbershop@gmail.com</Text>
        <Text>St. &quot;Moskva&quot; 43</Text> 
      </div>
      {!isMobile && <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d623.4153833118237!2d27.257241440911994!3d44.11824472897071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sbg!2sbg!4v1708031311874!5m2!1sbg!2sbg" width="500vh" height="350vh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
    </div>
  )
}

export default Contact
