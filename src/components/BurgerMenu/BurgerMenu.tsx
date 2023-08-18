import React from 'react';
import styles from './BurgerMenu.module.scss';
import { LinksBar } from 'components/LinksBar/LinksBar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BurgerMenuProps } from './BurgerMenu.types';

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ names, menuActive }) => {
  const router = useRouter();
  return (
    <nav className={!menuActive ? styles.root : `${styles.root} ${styles.opened}`}>
      <ul className={styles.list}>
        {names.map((name, idx) => (
          <li className={styles.item} key={idx}>
            <a href={`#${name.href}`} className={styles.link}>
              <span className="tag">#</span>
              {name.name}
            </a>
          </li>
        ))}
        <li className={styles.langs}>
          <Link
            href="/"
            locale="en"
            className={
              router.locale === 'en'
                ? `${styles.languageBtn} ${styles.languageBtn_active}`
                : styles.languageBtn
            }>
            En
          </Link>
          /
          <Link
            href="/"
            locale="ru"
            className={
              router.locale === 'ru'
                ? `${styles.languageBtn} ${styles.languageBtn_active}`
                : styles.languageBtn
            }>
            Ru
          </Link>
        </li>
      </ul>
      <LinksBar />
    </nav>
  );
};
