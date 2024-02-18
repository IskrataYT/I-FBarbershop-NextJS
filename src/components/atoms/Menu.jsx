import Button from "./button"
import styles from "../organisms/css/Navbar.module.css"
import Logo from "./logo"



export const Menu = ({ isAddMargin, isMobile }) => {
  return (
    <div className={styles.navbarElement}>
      <Button margin={isAddMargin ? "0 20px 0 0" : ""}  to="/">
        Home
      </Button>
      <Button
        margin={isAddMargin ? "0 20px 0 0" : ""}
        to="/about"
        navbar={true}
      >
        About
      </Button>
      {!isMobile && <Logo />}
      <Button
        margin={isAddMargin ? "0 20px 0 20px" : ""}
        to="/catalogue"
        navbar={true}
      >
        Catalogue
      </Button>
      <Button
        margin={isAddMargin ? "0 20px 0 0" : ""}
        to="/book-an-appointment"
        navbar={true}
      >
        Booking
      </Button>
    </div>
  )
}
