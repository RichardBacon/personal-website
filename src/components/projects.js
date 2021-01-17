import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project';
import styles from './projects.module.css';

const Projects = ({ id }) => {
  const data = useStaticQuery(graphql`
    {
      mainImage: file(relativePath: { eq: "project-code.jpg" }) {
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
        <h2 className={styles.primaryHeading}>Projects</h2>

        <div className={styles.project}>
          <Project
            name="NC News"
            projectLink="https://nc-news-frontend-app.netlify.app/"
            githubLink="https://github.com/RichardJonBacon/nc--news"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          dolorem dolore. Voluptatibus enim sunt maxime! Recusandae sapiente
          cupiditate dolore vitae. Perspiciatis iure voluptas adipisci
          consectetur impedit est id blanditiis laboriosam?"
            tech={['HTML', 'CSS', 'JavaScript', 'React']}
            image={data.mainImage.childImageSharp.fluid}
          />
        </div>
        <div className={styles.project}>
          <Project
            name="Budding"
            projectLink="https://github.com/budding-team/budding-front-end"
            githubLink="https://github.com/budding-team/budding-front-end"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum numquam hic natus. Culpa expedita reiciendis pariatur laboriosam dolore eveniet. Natus nemo porro impedit illum facilis. Dolorum veniam harum architecto sapiente."
            tech={['HTML', 'CSS', 'JavaScript', 'React Native']}
            image={data.mainImage.childImageSharp.fluid}
            reversed={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
