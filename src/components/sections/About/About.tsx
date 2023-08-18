import React from 'react';
import { HeadingDivider } from '../../HeadingDivider/HeadingDivider';
import Link from 'next/link';

import styles from './About.module.scss';

interface AboutProps {
  isPage: boolean;
  locale: {
    [key: string]: string;
  };
}

export const About: React.FC<AboutProps> = ({ isPage, locale }) => {
  return (
    <section className={styles.root} id="about-me">
      {isPage ? (
        <HeadingDivider
          isLink={false}
          isTag={false}
          isLine={true}
          isBack={true}
          locale={[locale.name, locale.viewall]}
        />
      ) : (
        <HeadingDivider
          isLink={false}
          isTag={true}
          isLine={true}
          isBack={false}
          locale={[locale.name, locale.viewall]}
        />
      )}

      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p className={styles.article}>
            {locale.first}
            <br />
            <br />
            {locale.second}
            <br />
            <br />
            {locale.third}
          </p>
          {isPage ? (
            false
          ) : (
            <Link href="/about" className="primary-btn">
              Read more -&gt;
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
