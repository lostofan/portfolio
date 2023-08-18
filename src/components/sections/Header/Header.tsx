import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Nav } from 'components/Nav';
import { BurgerMenu } from 'components/BurgerMenu';
import { BurgerButton } from 'components/BurgerButton';
import { ClickAwayListener } from 'components/ClickAwayListener';

interface HeaderProps {
  locale: {
    nav: string[];
  };
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
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
        <Nav names={locale.nav} />
      </div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <BurgerButton menuActive={menuActive} setMenuActive={setMenuActive} />
        <BurgerMenu names={locale.nav} menuActive={menuActive} />
      </ClickAwayListener>
    </header>
  );
};
