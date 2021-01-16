import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Richard Bacon
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="#about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="#projects">
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="#blog">
              Blog
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
