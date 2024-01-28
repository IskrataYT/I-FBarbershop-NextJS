// Navbar.js
import React, { useState, useEffect } from 'react';
import Button from '../atoms/button';
import styles from "./css/Navbar.module.css";
import Logo from '../atoms/logo';
import {FaUser, FaBars, FaArrowRight, FaMoon, FaSun, FaArrowLeft} from 'react-icons/fa6'
import Dropdown from '../molecules/dropdown';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeDropdownContentThemes = () => {
    setDropdownContent(
      <>
        <Button onClick={setDefaultDropdownContent} navbar={true}><FaArrowLeft /></Button>
        <Button navbar={true}>Dark <FaMoon /></Button>
        <Button navbar={true}>Light <FaSun /></Button>
      </>
    );
  };

  const changeDropdownContentLanguages = () => {
    setDropdownContent(
      <>
        <Button onClick={setDefaultDropdownContent} navbar={true}><FaArrowLeft /></Button>
        <Button navbar={true}>English</Button>
        <Button navbar={true}>Bulgarian</Button>
      </>
    );
  };


  const setDefaultDropdownContent = () => {
    setDropdownContent(
      <>
      <Button>Account System</Button>
      <Button onClick={changeDropdownContentThemes} navbar={true}>Theme <FaArrowRight /></Button>
      <Button onClick={changeDropdownContentLanguages} navbar={true}>Language <FaArrowRight /></Button>
    </>
    );
  };

  const [dropdownContent, setDropdownContent] = useState(
    <>
    <Button>Account System</Button>
    <Button onClick={changeDropdownContentThemes} navbar={true}>Theme <FaArrowRight /></Button>
    <Button onClick={changeDropdownContentLanguages} navbar={true}>Language <FaArrowRight /></Button>
  </>
  );

  


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
        <Dropdown clickable title={<FaUser />}>
              {dropdownContent}
            </Dropdown>
        <Logo isMobile></Logo>
          <Button onClick={toggleMenu}><FaBars></FaBars></Button>
        </div>
          {isOpen && (
            <div className={styles.navbarElement}>
              <Button to="/home">Home</Button>
              <Button to="/about" navbar={true}>About</Button>
              <Button to="/catalogue" navbar={true}>Catalogue</Button>
              <Button to="/book-an-appointment" navbar={true}>Booking</Button>
              </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.navbarElement}>
            <Button to="/home" margin="0 20px 0 0" navbar={true}>Home</Button>
            <Button to="/about" margin="0 20px 0 0" navbar={true}>About</Button>
            <Logo />
            <Button margin="0 20px 0 20px" to="/catalogue" navbar={true}>Catalogue</Button>
            <Button navbar={true} to="/book-an-appointment">Booking</Button>
          </div>
          <div className={styles.navbarElement}>
            <Dropdown clickable title={<FaUser />}>
              {dropdownContent}
            </Dropdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
