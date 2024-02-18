import styles from "./css/about.module.css"
import Introduction from "./introduction.js"
import Contact from "../molecules/contact.js"
import { useTranslation } from "next-i18next"

const AboutPage = () => {
  const { t } = useTranslation("common")
  return(
    <div className={styles.aboutContainer}>
      <Introduction title={t("welcome-short")}>{t("welcome")}</Introduction>
      <Introduction isLeft title={t("our-story")}>{t("story")}</Introduction>
      <Introduction title={t("our-services")}>{t("services")}</Introduction>
      <Introduction isLeft title={t("our-commitment")}>{t("commitment")}</Introduction>
      <Introduction title={t("join")}>{t("join-us")}</Introduction>
      <Contact />
      
    </div>
  )
}

export default AboutPage 