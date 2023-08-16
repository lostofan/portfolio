import React from 'react';

import styles from './Greeting.module.scss';

export const Greeting = () => {
  return (
    <section className={styles.root} id="home">
      <div className={styles.textBlock}>
        <div className={styles.heading}>
          Hi! My name is Artem. I'm a<span className={styles.highlight}> frontend developer</span>.
        </div>
        <button className="primary-btn">
          <a href="mailto:kolog007@gmail.com" className="home__mailLink">
            Contact me
          </a>
        </button>
      </div>
      <div className={styles.imageBlock}>
        <img className={styles.logo} src="imgs/logo.png" alt="" />
        <img src="" alt="" />
        <div className={styles.currentWork}>
          <div className={`${styles.ico} current__ico`}></div>
          <span className={styles.current}>
            Currently working on <span className={styles.currentHighlight}>Portfolio</span>
          </span>
        </div>
      </div>
    </section>
  );
};
