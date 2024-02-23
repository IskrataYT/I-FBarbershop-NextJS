import styles from "./css/about.module.css"
import Introduction from "./introduction.js"
import Contact from "../molecules/contact.js"
import { useTranslation } from "next-i18next"

const AboutPage = () => {
  const { t } = useTranslation("common")
  return(
    <div className={styles.aboutContainer}>
      <Introduction title={t("welcome-short")} imgUrl="/barbershop.jpg">{t("welcome")}</Introduction>
      <Introduction isLeft title={t("our-story")} imgUrl="/about1.jpg">{t("story")}</Introduction>
      <Introduction title={t("our-services")} imgUrl="/about2.jpg">{t("services")}</Introduction>
      <Introduction isLeft title={t("our-commitment")} imgUrl="/about3.jpg">{t("commitment")}</Introduction>
      <Introduction title={t("join")} imgUrl="/about4.jpg">{t("join-us")}</Introduction>
      <Contact />
      
    </div>
  )
}

export default AboutPage 