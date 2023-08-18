import Link from 'next/link';
import React from 'react';

import styles from './HeadingDivider.module.scss';
import { HeadingDividerProps } from './HeadingDivider.types';

export const HeadingDivider: React.FC<HeadingDividerProps> = ({
  isTag,
  isLink,
  isLine,
  isBack,
  locale,
}) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>
        {isTag ? <span className="tag">#</span> : <span className="tag">/</span>}
        {locale[0]}
      </h1>
      {isLine ? <div className={styles.line}></div> : false}
      {isLink ? (
        <Link href="/works" className={styles.view}>
          {[locale[1]]} ~~&gt;
        </Link>
      ) : (
        false
      )}
      {isBack ? (
        <Link href="/" className={styles.back}>
          {locale[2]} <span>&lt;</span>
        </Link>
      ) : (
        false
      )}
    </div>
  );
};
