import styles from "./css/footer.module.css"
import Text from "../atoms/text"
import Button from "../atoms/button"
import { FaInstagram, FaFacebook } from "react-icons/fa6"

const Footer = () => {

  return(
    <div className={styles.footerContainer}>
      <div className={styles.footerIcons}>
        <Button><FaInstagram/></Button>
        <Button><FaFacebook/></Button>
      </div>
      <Text isSecondary>© I&F barbershop. All rights reserved.</Text>
    </div>
  )
}

export default Footer 