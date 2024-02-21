import React, { useState, useEffect } from "react"
import Button from "../atoms/button"
import styles from "./css/Navbar.module.css"
import Logo from "../atoms/logo"
import {
  FaUser,
  FaBars,
} from "react-icons/fa6"
import Dropdown from "../molecules/dropdown"
import { getRenderedKeysByComponent, getComponentByKey } from "@/models/navbar-menu-model"
import { Menu } from "../atoms/Menu"
import { useTranslation } from "next-i18next"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [renderedKeys, setRenderedKeys] = React.useState([
    "account-settings",
    "theme",
    "language",
  ])
  const [userSignedIn, setUserSignedIn] = useState(false)
  const { t } = useTranslation("common")

  useEffect(() => {
    // This runs when the component mounts and updates `isMobile`
    const token = localStorage.getItem("token")
    // Fetch the user's logged-in status
    fetch("/api/user", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setUserSignedIn(data.loggedIn))
      .catch(error => console.error("Error:", error))
  }, [])

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
                getComponentByKey(key, t, () =>
                  setRenderedKeys(getRenderedKeysByComponent(key)), userSignedIn
                )
              )}
            </Dropdown>
            <Logo isMobile></Logo>
            <Button onClick={toggleMenu}>
              <FaBars></FaBars>
            </Button>
          </div>
          {isOpen && <Menu isAddMargin={false} isMobile={true}/>}
        </>
      ) : (
        <>
          <Menu isAddMargin={true}/>
          <div className={styles.navbarElement}>
            <Dropdown clickable title={<FaUser />}>
              {renderedKeys.map((key) =>
                getComponentByKey(key, t, () =>
                  setRenderedKeys(getRenderedKeysByComponent(key)), userSignedIn
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
