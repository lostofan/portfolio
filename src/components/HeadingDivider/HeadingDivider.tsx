import Link from 'next/link';
import React from 'react';

import styles from './HeadingDivider.module.scss';

interface DividerProps {
  name: string;
  isTag: boolean;
  isLink: boolean;
  isLine: boolean;
  isBack: boolean;
}

export const HeadingDivider: React.FC<DividerProps> = ({ name, isTag, isLink, isLine, isBack }) => {
  return (
    <div className={styles.root}>
      <h1 className="heading">
        {isTag ? <span className="tag">#</span> : <span className="tag">/</span>}
        {name}
      </h1>
      {isLine ? <div className="line"></div> : false}
      {isLink ? (
        <Link href="/works" className={styles.view}>
          View all ~~&gt;
        </Link>
      ) : (
        false
      )}
      {isBack ? (
        <Link href="/" className={styles.back}>
          Back <span className="heading__back_symbol">&lt;</span>
        </Link>
      ) : (
        false
      )}
    </div>
  );
};
