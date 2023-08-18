import React from 'react';
import styles from './Nav.module.scss';

interface NavProps {
  names: string[];
}

export const Nav: React.FC<NavProps> = ({ names }) => {
  return (
    <nav>
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
    </nav>
  );
};
