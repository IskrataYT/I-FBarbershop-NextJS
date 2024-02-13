// Navbar.js
import React, { useState, useEffect } from "react"
import Button from "../atoms/button"
import styles from "./css/Navbar.module.css"
import Logo from "../atoms/logo"
import {
  FaUser,
  FaBars,
  FaArrowRight,
  FaMoon,
  FaSun,
  FaArrowLeft,
} from "react-icons/fa6"
import Dropdown from "../molecules/dropdown"
import {
  getComponentByKey,
  getRenderedKeysByComponent,
} from "@/models/navbar-menu-model"
import { Menu } from "../atoms/Menu"


/**
 * Компонентите макс 60 линии
 * Компонентите, които рендерират JSX (HTML) трябва да са кръстени с главна буква
 * Без да се повтаря код. Ако има нещо, което се повтаря да се изнесе в компонент или отделна функция и да се използва където е необходимо
 * Да се ползват .jsx и .js екстеншъни за файловете (.jsx е за компоненти, .js е за всичко останало)
 * Куките като useEffect и useState трябва да са винаги най отгоре в компонента
 * Евент лисънърите не трябва да се ползват. Ако все пак се налага да се правят useEffect и да се чистят в ретърн на useEffect
 * Без JSX в useState 
 */



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [renderedKeys, setRenderedKeys] = React.useState([
    "account-settings",
    "theme",
    "language",
  ])

  useEffect(() => {
    // This runs when the component mounts and updates `isMobile`
    const isMobileWidth = window.innerWidth <= 640
    setIsMobile(isMobileWidth)
  }, [])

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileWidth = window.innerWidth <= 640
      setIsMobile(isMobileWidth)
      if (!isMobileWidth) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.navbarContainer}>
      {isMobile ? (
        <>
          <div className={styles.navbarElement}>
            <Dropdown clickable title={<FaUser />}>
              {renderedKeys.map((key) =>
                getComponentByKey(key, () =>
                  setRenderedKeys(getRenderedKeysByComponent(key))
                )
              )}
            </Dropdown>
            <Logo isMobile></Logo>
            <Button onClick={toggleMenu}>
              <FaBars></FaBars>
            </Button>
          </div>
          {isOpen && <Menu isAddMargin={false} />}
        </>
      ) : (
        <>
          <Menu isAddMargin={true} />
          <div className={styles.navbarElement}>
            <Dropdown clickable title={<FaUser />}>
              {renderedKeys.map((key) =>
                getComponentByKey(key, () =>
                  setRenderedKeys(getRenderedKeysByComponent(key))
                )
              )}
            </Dropdown>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
