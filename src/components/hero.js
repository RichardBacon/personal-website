import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroText}>
        <span className={styles.heroPreText}>Hello I'm</span>
        <span className={styles.heroPrimaryText}>Richard Bacon</span>
        <span className={styles.heroSecondaryText}>Software Developer</span>
      </h1>
    </section>
  );
};

export default Hero;
