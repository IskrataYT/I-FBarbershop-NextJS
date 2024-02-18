import styles from "./css/contact.module.css"
import Title from "../atoms/title.js"
import Text from "../atoms/text.js"
import { useEffect, useState } from "react"
import { useTranslation } from "next-i18next"

const Contact = () => {
  const { t } = useTranslation("common")
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
      <Title>{t("contact-us")}</Title>
      <div className={styles.contacts}>
        <Text>+359 89 977 4964</Text>
        <Text>IandF.barbershop@gmail.com</Text>
        <Text>{t("street")}</Text> 
      </div>
      {!isMobile && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.4518647297974!2d27.257346627030962!3d44.117900932511255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b021d5436b4837%3A0x25b99d15c7f84a74!2z0J_RgNC40YDQvtC00L4t0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LAg0LPQuNC80L3QsNC30LjRjyDigJzQodCyLiDQmtC70LjQvNC10L3RgiDQntGF0YDQuNC00YHQutC44oCd!5e1!3m2!1sbg!2sbg!4v1708256016842!5m2!1sbg!2sbg" width="500vh" height="350vh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
    </div>
  )
}

export default Contact
