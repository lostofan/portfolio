import React from 'react';

import styles from './Footer.module.scss';
import { LinksBar } from 'components/LinksBar/LinksBar';
import { FooterProps } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  return (
    <footer className={styles.root}>
      <div className={styles.leftBlock}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src="imgs/logo2.png" alt="" /> Pronin
          </div>
          <p className={styles.email}>kolog007@gmail.com</p>
        </div>
        <div className={styles.article}>{locale.front}</div>
      </div>
      <div className={styles.rightBlock}>
        <p>{locale.media}</p>
        <LinksBar />
      </div>
    </footer>
  );
};
