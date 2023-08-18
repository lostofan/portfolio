import Link from 'next/link';
import React from 'react';

import styles from './HeadingDivider.module.scss';

interface DividerProps {
  isTag: boolean;
  isLink: boolean;
  isLine: boolean;
  isBack: boolean;
  locale: string[];
}

export const HeadingDivider: React.FC<DividerProps> = ({
  isTag,
  isLink,
  isLine,
  isBack,
  locale,
}) => {
  return (
    <div className={styles.root}>
      <h1 className="heading">
        {isTag ? <span className="tag">#</span> : <span className="tag">/</span>}
        {locale[0]}
      </h1>
      {isLine ? <div className="line"></div> : false}
      {isLink ? (
        <Link href="/works" className={styles.view}>
          {[locale[1]]} ~~&gt;
        </Link>
      ) : (
        false
      )}
      {isBack ? (
        <Link href="/" className={styles.back}>
          {locale[2]} <span className="heading__back_symbol">&lt;</span>
        </Link>
      ) : (
        false
      )}
    </div>
  );
};
