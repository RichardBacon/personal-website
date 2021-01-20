import React from 'react';
import Project from './project';
import styles from './projects.module.css';

const Projects = ({ id, projects }) => {
  return projects.map((project) => (
    <div className={styles.project}>
      <Project key={project.id} project={project} />
    </div>
  ));
};

export default Projects;
