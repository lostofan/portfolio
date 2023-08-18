import React from 'react';
import { ProjectItem } from '../../ProjectItem/ProjectItem';
import styles from './Projects.module.scss';

import { HeadingDivider } from '../../HeadingDivider/HeadingDivider';
interface ProjectsProps {
  isPage: boolean;
  locale: {
    name: string;
    apps: string;
    overview: string[];
    viewall: string;
    back: string;
  };
}

export const Projects: React.FC<ProjectsProps> = ({ isPage, locale }) => {
  return (
    <section id="works" className={styles.root}>
      {isPage ? (
        <HeadingDivider
          isLink={false}
          isTag={false}
          isLine={true}
          isBack={true}
          locale={[locale.name, locale.viewall, locale.back]}
        />
      ) : (
        <HeadingDivider
          isLink={true}
          isTag={true}
          isLine={true}
          isBack={false}
          locale={[locale.name, locale.viewall, locale.back]}
        />
      )}
      {isPage ? (
        <HeadingDivider
          isLink={false}
          isTag={true}
          isLine={false}
          isBack={false}
          locale={[locale.name, locale.viewall, locale.back]}
        />
      ) : (
        false
      )}
      <div className={styles.wrapper}>
        <ProjectItem
          stack="Typescript React Redux SCSS HTML"
          name="Horror Clicker"
          overview={locale.overview[0]}
          img="imgs/horror.jpg"
          gif="imgs/horror.gif"
          deploy="https://verdant-rugelach-c00bcf.netlify.app/"
          git="https://github.com/lostofan/horror-clicker"
        />
        <ProjectItem
          stack="TypeScript React Redux SCSS HTML"
          name="Burger-App"
          overview={locale.overview[1]}
          img="imgs/burger.jpg"
          gif="imgs/burger.gif"
          deploy="https://serene-phoenix-afb553.netlify.app"
          git="https://github.com/lostofan/burgerapp"
        />
        <ProjectItem
          stack="React SCSS HTML"
          name="Delivery shop"
          overview={locale.overview[2]}
          img="imgs/delivery.jpg"
          gif="imgs/delivery.gif"
          deploy="https://nimble-sopapillas-e354b5.netlify.app/"
          git="https://github.com/lostofan/delivery-shop"
        />
        {isPage ? (
          <ProjectItem
            stack="React NEXT.js TypeScript SCSS HTML"
            name="Portfolio"
            overview={locale.overview[3]}
            img="imgs/portfolio.jpg"
            gif="imgs/portfolio.gif"
            deploy="https://nimble-sopapillas-e354b5.netlify.app/"
            git="https://github.com/lostofan/portfolio"
          />
        ) : (
          false
        )}
      </div>
    </section>
  );
};
