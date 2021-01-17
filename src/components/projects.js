import React from 'react';
import Project from './project';
import styles from './projects.module.css';

const Projects = ({ id, projects }) => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.primaryHeading}>Projects</h2>

        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
