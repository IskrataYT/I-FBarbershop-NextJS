import Button from "./button"
import styles from "../organisms/css/Navbar.module.css"
import Logo from "./logo"
import { useTranslation } from "next-i18next"



export const Menu = ({ isAddMargin, isMobile }) => {
  const { t } = useTranslation("common")
  return (
    <div className={styles.navbarElement}>
      <Button margin={isAddMargin ? "0 20px 0 0" : ""}  to="/">
        {t("home")}
      </Button>
      <Button
        margin={isAddMargin ? "0 20px 0 0" : ""}
        to="/about"
        navbar={true}
      >
        {t("about")}
      </Button>
      {!isMobile && <Logo />}
      <Button
        margin={isAddMargin ? "0 20px 0 20px" : ""}
        to="/catalogue"
        navbar={true}
      >
        {t("catalogue")}
      </Button>
      <Button
        margin={isAddMargin ? "0 20px 0 0" : ""}
        to="/book-an-appointment"
        navbar={true}
      >
        {t("booking")}
      </Button>
    </div>
  )
}
