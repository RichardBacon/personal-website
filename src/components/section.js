import React from 'react';
import styles from './section.module.css';

const Section = ({ children, id, heading }) => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
