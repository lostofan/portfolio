import React from 'react';
import { ProjectItem } from './ProjectItem';

import '../styles/projects.scss';

export const Projects = () => {
  return (
    <div id="projects" className="main__projects projects">
      <div className="projects__heading headings">
        <h1 className="heading">
          <span className="tag">#</span>projects
        </h1>
        <div className="line"></div>
        <button className="heading__all-btn">View all ~~&gt;</button>
      </div>
      <div className="projects__wrapper">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};
