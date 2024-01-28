// Button.js
import React from 'react';
import classNames from 'classnames';
import styles from './css/Button.module.css';
import Link from 'next/link';
import Text from './text';

const Button = ({ children, primary, onClick, to, padding, margin, navbar }) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.primary]: primary,
  });

  const renderButton = () => (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      style={{ padding: padding, margin: margin }}
    >
      <Text isNavbar={navbar}>{children}</Text> {/* Pass navbar prop to Text */}
    </button>
  );

  return to ? <Link href={to}>{renderButton()}</Link> : renderButton();
};

export default Button;


