import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './project.module.css';

const Project = ({
  name,
  projectLink,
  githubLink,
  description,
  tech,
  image,
  reversed,
}) => {
  return (
    <div className={`${styles.content} ${reversed && styles.reversed}`}>
      <div>
        <header className={styles.header}>
          <h3 className={styles.heading}>{name}</h3>
          <div className={styles.links}>
            <a className={styles.link} href={projectLink} target="blank">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a className={styles.link} href={githubLink} target="blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </header>

        <p className={styles.paragraph}>{description}</p>

        <div>
          <h4 className={styles.secondaryHeading}>Tech</h4>
          <ul className={styles.list}>
            {tech.map((element) => (
              <li key={element} className={styles.item}>
                <i className={`fas fa-angle-right ${styles.icon}`}></i>
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Img className={styles.image} fluid={image} alt="Code" />
    </div>
  );
};

export default Project;
