import React, { useState } from 'react';
import styles from './BurgerButton.module.scss';
import { BurgerButtonProps } from './BurgerButton.types';

export const BurgerButton: React.FC<BurgerButtonProps> = ({ menuActive, setMenuActive }) => {
  return (
    <div>
      <div
        id="nav-icon1"
        className={!menuActive ? styles.root : `${styles.root} ${styles.opened}`}
        onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
