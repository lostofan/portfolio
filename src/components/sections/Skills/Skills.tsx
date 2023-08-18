import React from 'react';
import styles from './Skills.module.scss';
import { HeadingDivider } from '../../HeadingDivider/HeadingDivider';

interface SkillsProps {
  isPage: boolean;
  locale: {
    [key: string]: string;
  };
}
export const Skills: React.FC<SkillsProps> = ({ isPage, locale }) => {
  return (
    <section className={styles.root}>
      {isPage ? (
        <HeadingDivider
          isTag={true}
          isLink={false}
          isLine={false}
          isBack={false}
          locale={[locale.name, locale.viewall, locale.back]}
        />
      ) : (
        <HeadingDivider
          isTag={true}
          isLink={false}
          isLine={true}
          isBack={false}
          locale={[locale.name, locale.viewall, locale.back]}
        />
      )}
      <div className={styles.wrapper}>
        <div className={`${styles.item} ${styles.languages}`} data-aos="fade-left">
          <p className={styles.title}>{locale.lang}</p>
          <p className={styles.name}>JavaScript TypeScript</p>
        </div>
        <div className={`${styles.item} ${styles.other}`} data-aos="fade-left">
          <p className={styles.title}>{locale.other}</p>
          <p className={styles.name}>HTML5 CSS3 SCSS REST</p>
        </div>
        <div className={`${styles.item} ${styles.tools}`} data-aos="fade-down-left">
          <p className={styles.title}>{locale.tools}</p>
          <p className={styles.name}>VSCode Linux Git Figma Photoshop</p>
        </div>
        <div className={`${styles.item} ${styles.frameworks}`} data-aos="fade-up-left">
          <p className={styles.title}>{locale.frameworks}</p>
          <p className={styles.name}>React Redux Toolkit Next.js</p>
        </div>
      </div>
    </section>
  );
};
