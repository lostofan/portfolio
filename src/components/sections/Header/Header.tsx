import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Nav } from 'components/Nav';
import { BurgerMenu } from 'components/BurgerMenu';
import { BurgerButton } from 'components/BurgerButton';
import { ClickAwayListener } from 'components/ClickAwayListener';

export const Header = () => {
  const list: string[] = ['home', 'works', 'about-me', 'contacts'];
  const [menuActive, setMenuActive] = useState(false);

  const handleClickAway = () => {
    if (menuActive) {
      setMenuActive(false);
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="imgs/logo2.png" alt="" /> Pronin
        </div>
        <Nav names={list} />
      </div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <BurgerButton menuActive={menuActive} setMenuActive={setMenuActive} />
        <BurgerMenu names={list} menuActive={menuActive} />
      </ClickAwayListener>
    </header>
  );
};
