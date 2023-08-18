import React from 'react';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavProps {
  names: string[];
}

export const Nav: React.FC<NavProps> = ({ names }) => {
  const router = useRouter();

  return (
    <nav>
      <ul className={styles.list}>
        {names.map((name, idx) => (
          <li className={styles.item} key={idx}>
            <a href={`#${name}`} className={styles.link}>
              <span className="tag">#</span>
              {name}
            </a>
          </li>
        ))}
        <li className={styles.lang}>
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
    </nav>
  );
};
