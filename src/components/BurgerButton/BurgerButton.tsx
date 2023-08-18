import React, { useState } from 'react';
import styles from './BurgerButton.module.scss';

interface BurgerProps {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BurgerButton: React.FC<BurgerProps> = ({ menuActive, setMenuActive }) => {
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
