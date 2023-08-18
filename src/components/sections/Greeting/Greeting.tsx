import React from 'react';

import styles from './Greeting.module.scss';

interface GreetingProps {
  locale: {
    [key: string]: string;
  };
}

export const Greeting: React.FC<GreetingProps> = ({ locale }) => {
  return (
    <section className={styles.root} id="home">
      <div className={styles.textBlock}>
        <div className={styles.heading}>
          {locale.heading}
          <span className={styles.highlight}> {locale.span}</span>
        </div>
        <button className="primary-btn">
          <a href="mailto:kolog007@gmail.com">{locale.contact}</a>
        </button>
      </div>
      <div className={styles.imageBlock}>
        <img className={styles.logo} src="imgs/logo.png" alt="" />
        <img src="" alt="" />
        <div className={styles.currentWork}>
          <div className={`${styles.ico} current__ico`}></div>
          <span className={styles.current}>
            {locale.current}
            <span className={styles.currentHighlight}>{locale.task}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
