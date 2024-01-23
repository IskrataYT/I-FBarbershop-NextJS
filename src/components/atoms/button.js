// Button.js
import React, { Children } from 'react';
import classNames from 'classnames';
import styles from './css/Button.module.css';
import Link from 'next/link';
import Text from './text';

const Button = ({ children, primary, onClick, to, padding, margin }) => {
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
      <Text>{children}</Text>
    </button>
  );

  return to ? <Link href={to}>{renderButton()}</Link> : renderButton();
};

export default Button;

