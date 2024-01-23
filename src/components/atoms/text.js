// Text.js
import React from 'react';
import styles from './css/Text.module.css';

const Text = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default Text;
