// Navbar.js
import React, { useState, useEffect } from 'react';
import Button from '../atoms/button';
import styles from "./css/Navbar.module.css";
import Logo from '../atoms/logo';
import {FaUser, FaBars, FaArrowRight} from 'react-icons/fa6'
import Dropdown from '../molecules/dropdown';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // This runs when the component mounts and updates `isMobile`
    const isMobileWidth = window.innerWidth <= 640;
    setIsMobile(isMobileWidth);
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileWidth = window.innerWidth <= 640;
      setIsMobile(isMobileWidth);
      if (!isMobileWidth) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      {isMobile ? (
        <>
        <div className={styles.navbarElement}>
        <Dropdown></Dropdown>
        <Logo isMobile></Logo>
          <Button onClick={toggleMenu}><FaBars></FaBars></Button>
        </div>
          {isOpen && (
            <div className={styles.navbarElement}>
              <Button to="/home">Home</Button>
              <Button to="/about">About</Button>
              <Button to="/catalogue">Catalogue</Button>
              <Button to="/book-an-appointment">Booking</Button>
              </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.navbarElement}>
            <Button to="/home" margin="0 20px 0 0">Home</Button>
            <Button to="/about" margin="0 20px 0 0">About</Button>
            <Logo />
            <Button margin="0 20px 0 20px">Catalogue</Button>
            <Button>Booking</Button>
          </div>
          <div className={styles.navbarElement}>
            <Dropdown clickable title={<FaUser />}>
              <Button>Account System</Button>
              <Button>Theme <FaArrowRight /></Button>
              <Button>Language <FaArrowRight /></Button>
            </Dropdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
