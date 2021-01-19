import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
    <div className={styles.content}>
      <div>
        <div className={styles.bio}>
          <h3 className={styles.heading}>My Bio</h3>
          <p className={styles.paragraph}>
            I'm Richard, a software developer based near Nottingham, England.
          </p>
          <p className={styles.paragraph}>
            I have a background in both coding and design, now I combine my
            skills together to create beautiful apps and websites.
          </p>
          <p className={styles.paragraph}>
            I'm passionate about user focussed design and clean, efficient,
            easily maintainable code.
          </p>
          <p className={styles.paragraph}>
            I'm a lifelong learner and I enjoy taking on new challenges. I have
            a degree in computer science and am also a software development
            bootcamp graduate.
          </p>
        </div>

        <h3 className={styles.heading}>My Skills</h3>

        <h4 className={styles.listHeading}>Front End</h4>
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
        </ul>

        <h4 className={styles.listHeading}>Back End</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <i className={`fas fa-angle-right ${styles.icon}`}></i>Node
          </li>
          <li className={styles.item}>
            <i className={`fas fa-angle-right ${styles.icon}`}></i>Express
          </li>
          <li className={styles.item}>
            <i className={`fas fa-angle-right ${styles.icon}`}></i>SQL
          </li>
        </ul>
      </div>

      <div>
        <Img
          className={styles.image}
          fluid={data.mainImage.childImageSharp.fluid}
          alt="Richard Bacon"
        />

        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href="https://github.com/RichardJonBacon" target="blank">
              <i className={`fab fa-github ${styles.socialIcon}`}></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://codepen.io/RichardJonBacon" target="blank">
              <i className={`fab fa-codepen ${styles.socialIcon}`}></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://twitter.com/RichardJonBacon" target="blank">
              <i className={`fab fa-twitter ${styles.socialIcon}`}></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://linkedin.com/in/RichardJonBacon" target="blank">
              <i className={`fab fa-linkedin ${styles.socialIcon}`}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
