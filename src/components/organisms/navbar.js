// Navbar.js
import React from 'react';
import Button from '../atoms/button';
import styles from "./css/Navbar.module.css";
import Logo from '../atoms/logo';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarElement}>
        <Button to="/home" margin="0 20px 0 0">Home</Button>
        <Button to="/about" margin="0 20px 0 0">About</Button>
        <Logo />
        <Button margin="0 20px 0 20px">Catalogue</Button>
        <Button>Booking</Button>
      </div>
      <div className={styles.navbarElement}>
        <Button>Account</Button>
      </div>
    </div>
  );
};

export default Navbar;
