import styles from "./css/footer.module.css"
import Text from "../atoms/text"
import Button from "../atoms/button"
import { FaInstagram, FaFacebook } from "react-icons/fa6"

const Footer = () => {

  return(
    <div className={styles.footerContainer}>
      <div className={styles.footerIcons}>
        <Button to="https://www.instagram.com/iskren_mink0v/"><FaInstagram/></Button>
        <Button to="https://www.facebook.com/PmgSilistra"><FaFacebook/></Button>
      </div>
      <Text isSecondary>© I&F barbershop. All rights reserved.</Text>
    </div>
  )
}

export default Footer 