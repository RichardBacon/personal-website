import React from 'react';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './about.module.css';

const About = ({ id }) => {
  const data = useStaticQuery(graphql`
    {
      mainImage: file(relativePath: { eq: "richardjonbacon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.primaryHeading}>About Me</h2>
        <div className={styles.content}>
          <div>
            <div className={styles.text}>
              <p className={styles.paragraph}>
                I'm Richard, a front end software developer based in Nottingham,
                England.
              </p>
              <p className={styles.paragraph}>
                I have a background in both coding and design, now I combine my
                skills together to create beautful front end apps and websites.
              </p>
              <p className={styles.paragraph}>
                I'm passionate about user focussed design and clean, efficient,
                easily maintainable code.
              </p>
              <p className={styles.paragraph}>
                I'm a lifelong learner and I enjoy taking on new challenges.
                I've recently graduated from a software development bootcamp in
                order to gain modern development skills.
              </p>
            </div>
            <div>
              <h3 className={styles.secondaryHeading}>My Skills</h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <i className={`fas fa-angle-right ${styles.icon}`}></i>HTML
                </li>
                <li className={styles.item}>
                  <i className={`fas fa-angle-right ${styles.icon}`}></i>CSS
                </li>
                <li className={styles.item}>
                  <i className={`fas fa-angle-right ${styles.icon}`}></i>
                  JavaScript
                </li>
                <li className={styles.item}>
                  <i className={`fas fa-angle-right ${styles.icon}`}></i>React
                </li>
                <li className={styles.item}>
                  <i className={`fas fa-angle-right ${styles.icon}`}></i>Gatsby
                </li>
                <li className={styles.item}>
                  <i className={`fas fa-angle-right ${styles.icon}`}></i>Node
                </li>
                <li className={styles.item}>
                  <i className={`fas fa-angle-right ${styles.icon}`}></i>SQL
                </li>
              </ul>
            </div>
          </div>
          <Img
            className={styles.image}
            fluid={data.mainImage.childImageSharp.fluid}
            alt="Richard Bacon"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
