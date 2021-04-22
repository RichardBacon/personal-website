import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './project.module.css';

const Project = ({ project }) => {
  const {
    title,
    projectUrl,
    githubUrl,
    description,
    tech,
    image,
  } = project.frontmatter;

  const data = useStaticQuery(graphql`
    {
      defaultImage: file(relativePath: { eq: "code.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.heading}>{title}</h3>
      </header>

      <div className={styles.content}>
        <div>
          <div
            className={styles.project}
            dangerouslySetInnerHTML={{ __html: project.html }}
          ></div>

          <h4 className={styles.secondaryHeading}>Tech</h4>
          <ul className={styles.list}>
            {tech.map((element) => (
              <li key={element} className={styles.item}>
                <i className={`fas fa-angle-right ${styles.icon}`}></i>
                {element}
              </li>
            ))}
          </ul>

          <div className={styles.links}>
            <h4 className={styles.secondaryHeading}>Links</h4>
            <a className={styles.link} href={projectUrl} target="blank">
              App <i className="fas fa-external-link-alt"></i>
            </a>
            <a className={styles.link} href={githubUrl} target="blank">
              Source Code <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <Img
          className={styles.image}
          fluid={
            image
              ? image.childImageSharp.fluid
              : data.defaultImage.childImageSharp.fluid
          }
          alt={title}
        />
      </div>
    </>
  );
};

export default Project;
