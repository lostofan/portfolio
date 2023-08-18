import React from 'react';
import styles from './BurgerMenu.module.scss';
import { LinksBar } from 'components/LinksBar/LinksBar';

interface BurgerMenuProps {
  names: string[];
  menuActive: boolean;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ names, menuActive }) => {
  return (
    <nav className={!menuActive ? styles.root : `${styles.root} ${styles.opened}`}>
      <ul className={styles.list}>
        {names.map((name) => (
          <li className={styles.item} key={name}>
            <a href={`#${name}`} className={styles.link}>
              <span className="tag">#</span>
              {name}
            </a>
          </li>
        ))}
      </ul>
      <LinksBar />
    </nav>
  );
};
