import React from 'react';
import styles from './Skills.module.scss';
import { HeadingDivider } from '../HeadingDivider/HeadingDivider';

interface SkillsProps {
  isPage: boolean;
}
export const Skills: React.FC<SkillsProps> = ({ isPage }) => {
  return (
    <section className={styles.root}>
      {isPage ? (
        <HeadingDivider name="skills" isTag={true} isLink={false} isLine={false} isBack={false} />
      ) : (
        <HeadingDivider name="skills" isTag={true} isLink={false} isLine={true} isBack={false} />
      )}
      <div className={styles.wrapper}>
        <div className={`${styles.item} ${styles.languages}`} data-aos="fade-left">
          <p className={styles.title}>Languages</p>
          <p className={styles.name}>JavaScript TypeScript</p>
        </div>
        <div className={`${styles.item} ${styles.other}`} data-aos="fade-left">
          <p className={styles.title}>Other</p>
          <p className={styles.name}>HTML5 CSS3 SCSS REST</p>
        </div>
        <div className={`${styles.item} ${styles.tools}`} data-aos="fade-down-left">
          <p className={styles.title}>Tools</p>
          <p className={styles.name}>VSCode Linux Git Figma Photoshop</p>
        </div>
        <div className={`${styles.item} ${styles.frameworks}`} data-aos="fade-up-left">
          <p className={styles.title}>Frameworks</p>
          <p className={styles.name}>React Redux Toolkit</p>
        </div>
      </div>
    </section>
  );
};
