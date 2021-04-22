import React from 'react';
import styles from './contact.module.css';

const Contact = ({ id }) => {
  return (
    <div className={styles.content}>
      <p className={styles.paragraph}>
        I'm always happy to connect, find me on social media or contact me by
        email.
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://twitter.com/richardbcodes"
            target="blank"
          >
            <i className={`fab fa-twitter ${styles.icon}`}></i>
            Twitter
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://linkedin.com/in/richardjohnbacon"
            target="blank"
          >
            <i className={`fab fa-linkedin ${styles.icon}`}></i>
            LinkedIn
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="mailto:richardjohnbacon@gmail.com">
            <i className={`far fa-paper-plane ${styles.icon}`}></i>
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
