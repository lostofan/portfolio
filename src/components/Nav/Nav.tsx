import React from 'react';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#home" className={styles.link}>
            <span className="tag">#</span>
            home
          </a>
        </li>
        <li className={styles.item}>
          <a href="#projects" className={styles.link}>
            <span className="tag">#</span>
            works
          </a>
        </li>
        <li className={styles.item}>
          <a href="#about-me" className={styles.link}>
            <span className="tag">#</span>
            about-me
          </a>
        </li>
        <li className={styles.item}>
          <a href="#contacts" className={styles.link}>
            <span className="tag">#</span>
            contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
