import React from 'react';
import Project from './project';
import styles from './projects.module.css';

const Projects = ({ id, projects }) => {
  return projects.map((project) => (
    <article key={project.id} className={styles.project}>
      <Project project={project} />
    </article>
  ));
};

export default Projects;
