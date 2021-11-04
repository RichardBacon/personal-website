import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './about.module.css';

const About = ({ id }) => {
  const data = useStaticQuery(graphql`
    {
      mainImage: file(relativePath: { eq: "richardjohnbacon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <article className={styles.content}>
      <div className={styles.text}>
        <div className={styles.bio}>
          <p className={styles.paragraph}>
            I'm Richard, a software developer from Nottingham, England. I have
            an interest in all modern web technologies, especially the React
            ecosystem and the JAMStack.
          </p>
          <p className={styles.paragraph}>
            I'm a creative problem solver and have a particular passion for
            creating beautiful, functional and accessible frontend interfaces.
          </p>
          <p className={styles.paragraph}>
            I strive to write clean, easily maintainable, performant code and
            advocate the use of practices such as Test Driven Development and
            Functional Programming.
          </p>
          <p className={styles.paragraph}>
            I enjoy building my own personal projects as a way of learning and
            improving, as well as contributing to collaborative and open source
            projects.
          </p>
        </div>
      </div>

      <div>
        <Img
          className={styles.image}
          fluid={data.mainImage.childImageSharp.fluid}
          alt="Richard Bacon"
        />

        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href="https://github.com/RichardBacon" target="blank">
              <i className={`fab fa-github ${styles.socialIcon}`}></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://twitter.com/richardbcodes" target="blank">
              <i className={`fab fa-twitter ${styles.socialIcon}`}></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://linkedin.com/in/richardjohnbacon" target="blank">
              <i className={`fab fa-linkedin ${styles.socialIcon}`}></i>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default About;
