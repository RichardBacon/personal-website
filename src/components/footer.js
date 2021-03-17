import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small className={styles.text}>&copy; Richard Bacon 2021</small>
      <a
        className={styles.link}
        href="https://github.com/RichardBacon/personal-website"
        target="blank"
      >
        Source Code
        <i className={`fab fa-github ${styles.icon}`}></i>
      </a>
    </footer>
  );
};

export default Footer;
