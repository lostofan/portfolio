import React from 'react';
import { ProjectItem } from '../../ProjectItem/ProjectItem';

import styles from './Projects.module.scss';

import { HeadingDivider } from '../../HeadingDivider/HeadingDivider';
interface ProjectsProps {
  isPage: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isPage }) => {
  return (
    <section id="works" className={styles.root}>
      {isPage ? (
        <HeadingDivider name="projects" isLink={false} isTag={false} isLine={true} isBack={true} />
      ) : (
        <HeadingDivider name="projects" isLink={true} isTag={true} isLine={true} isBack={false} />
      )}
      {isPage ? (
        <HeadingDivider
          name="complete-apps"
          isLink={false}
          isTag={true}
          isLine={false}
          isBack={false}
        />
      ) : (
        false
      )}
      <div className={styles.wrapper} data-aos="flip-up">
        <ProjectItem
          stack="Typescript React Redux SCSS HTML"
          name="Horror Clicker"
          overview="Small game in a clicker genre"
          img="imgs/horror.jpg"
          gif="imgs/horror.gif"
          deploy="https://verdant-rugelach-c00bcf.netlify.app/"
          git="https://github.com/lostofan/horror-clicker"
        />
        <ProjectItem
          stack="TypeScript React Redux SCSS HTML"
          name="Burger-App"
          overview="Burger constructor app"
          img="imgs/burger.jpg"
          gif="imgs/burger.gif"
          deploy="https://serene-phoenix-afb553.netlify.app"
          git="https://github.com/lostofan/burgerapp"
        />
        <ProjectItem
          stack="React SCSS HTML"
          name="Delivery shop"
          overview="Delivery shop App"
          img="imgs/delivery.jpg"
          gif="imgs/delivery.gif"
          deploy="https://nimble-sopapillas-e354b5.netlify.app/"
          git="https://github.com/lostofan/delivery-shop"
        />
        {isPage ? (
          <ProjectItem
            stack="React NEXT.js TypeScript SCSS HTML"
            name="Portfolio"
            overview="You are here"
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
