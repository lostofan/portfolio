import React from 'react';

import '../styles/projectItem.scss';

export const ProjectItem = () => {
  return (
    <div className="projects__item project">
      <img src={require('../imgs/burger.jpg')} alt="" className="project__image" />
      <p className="project__stack">HTML SCSS PYTHON FLASK</p>
      <div className="project__info">
        <h2 className="project__name">Burger-App</h2>
        <p className="project__overview">Burger constructor app</p>
        <div className="project__buttons">
          <button className="project__live-btn primary-btn">Live &lt;~&gt;</button>
          <button className="project__git-btn secondary-btn">Git &gt;=</button>
        </div>
      </div>
    </div>
  );
};
