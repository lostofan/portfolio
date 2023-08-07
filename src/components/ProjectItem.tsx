import React from 'react';

import '../styles/projectItem.scss';

interface Projectprops {
  stack: string;
  name: string;
  overview: string;
  img: string;
  gif: string;
  deploy: string;
  git: string;
}
export const ProjectItem: React.FC<Projectprops> = ({
  stack,
  name,
  overview,
  img,
  gif,
  deploy,
  git,
}) => {
  return (
    <div className="projects__item project">
      <img
        src={img}
        alt=""
        className="project__image"
        onMouseOver={(e) => (e.currentTarget.src = gif)}
        onMouseOut={(e) => (e.currentTarget.src = img)}
      />
      <p className="project__stack">{stack}</p>
      <div className="project__info">
        <h2 className="project__name">{name}</h2>
        <p className="project__overview">{overview}</p>
        <div className="project__buttons">
          <button className="project__live-btn primary-btn">
            <a href={deploy} className="project__deploy">
              Live &lt;~&gt;
            </a>
          </button>
          <button className="project__git-btn secondary-btn">
            <a href={git} className="project__git">
              Git &gt;=
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
