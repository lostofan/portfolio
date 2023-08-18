import React from 'react';

import styles from './ProjectItem.module.scss';

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
    <div className={styles.root} data-aos="flip-up">
      <img
        src={img}
        alt=""
        className={styles.image}
        onMouseOver={(e) => (e.currentTarget.src = gif)}
        onMouseOut={(e) => (e.currentTarget.src = img)}
      />
      <p className={styles.stack}>{stack}</p>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.overview}>{overview}</p>
        <div className={styles.buttons}>
          <button className="primary-btn">
            <a href={deploy} className="project__deploy">
              Live &lt;~&gt;
            </a>
          </button>
          <button className="secondary-btn">
            <a href={git} className="project__git">
              Git &gt;
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
