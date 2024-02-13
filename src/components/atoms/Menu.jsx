import Button from "./button"
import styles from '../organisms/css/Navbar.module.css'



export const Menu = ({ isAddMargin }) => {
  return (
    <div className={styles.navbarElement}>
      <Button style={{ margin: isAddMargin ? "0 20px 0 0" : "" }} to="/home">
        Home
      </Button>
      <Button
        style={{ margin: isAddMargin ? "0 20px 0 0" : "" }}
        to="/about"
        navbar={true}
      >
        About
      </Button>
      <Button
        style={{ margin: isAddMargin ? "0 20px 0 20px" : "" }}
        to="/catalogue"
        navbar={true}
      >
        Catalogue
      </Button>
    </div>
  )
}
