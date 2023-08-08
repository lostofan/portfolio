import React from 'react';
import { ProjectItem } from './ProjectItem';

import '../styles/projects.scss';

import { HeadingDivider } from './HeadingDivider';
interface ProjectsProps {
  isPage: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isPage }) => {
  return (
    <div id="projects" className="main__projects projects">
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
      <div className="projects__wrapper" data-aos="flip-up">
        <ProjectItem
          stack="Typescript React Redux SCSS HTML"
          name="Horror Clicker"
          overview="Small game in a clicker genre"
          img={require('../imgs/horror.jpg')}
          gif={require('../imgs/horror.gif')}
          deploy="https://verdant-rugelach-c00bcf.netlify.app/"
          git="https://github.com/lostofan/horror-clicker"
        />
        <ProjectItem
          stack="TypeScript React Redux SCSS HTML"
          name="Burger-App"
          overview="Burger constructor app"
          img={require('../imgs/burger.jpg')}
          gif={require('../imgs/burger.gif')}
          deploy="https://serene-phoenix-afb553.netlify.app"
          git="https://github.com/lostofan/burgerapp"
        />
        <ProjectItem
          stack="JS React SCSS HTML"
          name="Delivery shop"
          overview="Delivery shop App"
          img={require('../imgs/delivery.jpg')}
          gif={require('../imgs/delivery.gif')}
          deploy="https://nimble-sopapillas-e354b5.netlify.app/"
          git="https://github.com/lostofan/delivery-shop"
        />
        {isPage ? (
          <ProjectItem
            stack="JS React TypeScript SCSS HTML"
            name="Portfolio"
            overview="You are here"
            img={require('../imgs/delivery.jpg')}
            gif={require('../imgs/delivery.gif')}
            deploy="https://nimble-sopapillas-e354b5.netlify.app/"
            git="https://github.com/lostofan/delivery-shop"
          />
        ) : (
          false
        )}
      </div>
    </div>
  );
};
