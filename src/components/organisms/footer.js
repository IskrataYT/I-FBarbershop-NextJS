import styles from "./css/footer.module.css"
import Text from "../atoms/text"
import Button from "../atoms/button"
import { FaInstagram, FaFacebook } from "react-icons/fa6"
import { useTranslation } from "next-i18next"

const Footer = () => {
  const { t } = useTranslation("common")
  return(
    <div className={styles.footerContainer}>
      <div className={styles.footerIcons}>
        <Button to="https://www.instagram.com/iskren_mink0v/"><FaInstagram/></Button>
        <Button to="https://www.facebook.com/PmgSilistra"><FaFacebook/></Button>
      </div>
      <Text isSecondary>{t("all-rights")}</Text>
    </div>
  )
}

export default Footer 