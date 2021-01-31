import React from 'react';
import Project from './project';
import styles from './projects.module.css';

const Projects = ({ id, projects }) => {
  return projects.map((project) => (
    <div key={project.id} className={styles.project}>
      <Project project={project} />
    </div>
  ));
};

export default Projects;
