import React from 'react';
import styles from './Header.module.scss';
import { Nav } from 'components/Nav';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="imgs/logo2.png" alt="" /> Pronin
        </div>
        <Nav />
      </div>
    </header>
  );
};
