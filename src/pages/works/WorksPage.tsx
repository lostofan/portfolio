import React, { useEffect } from 'react';
import { Projects } from '../../components/Projects';

import '../../styles/worksPage.scss';
import { HeadingDivider } from '../../components/HeadingDivider';
import { ProjectItem } from '../../components/ProjectItem';

export const WorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="worksPage">
      <Projects isPage={true} />
      <HeadingDivider
        name="small-projects"
        isTag={true}
        isLink={false}
        isLine={false}
        isBack={false}
      />
      <div className="projects__wrapper" data-aos="flip-up">
        <ProjectItem
          stack="TypeScript React Redux SCSS HTML"
          name="Burger-App"
          overview="Burger constructor app"
          img={require('../../imgs/burger.jpg')}
          gif={require('../../imgs/burger.gif')}
          deploy="https://serene-phoenix-afb553.netlify.app"
          git="https://github.com/lostofan/burgerapp"
        />
        <ProjectItem
          stack="TypeScript React Redux SCSS HTML"
          name="Burger-App"
          overview="Burger constructor app"
          img={require('../../imgs/burger.jpg')}
          gif={require('../../imgs/burger.gif')}
          deploy="https://serene-phoenix-afb553.netlify.app"
          git="https://github.com/lostofan/burgerapp"
        />
        <ProjectItem
          stack="TypeScript React Redux SCSS HTML"
          name="Burger-App"
          overview="Burger constructor app"
          img={require('../../imgs/burger.jpg')}
          gif={require('../../imgs/burger.gif')}
          deploy="https://serene-phoenix-afb553.netlify.app"
          git="https://github.com/lostofan/burgerapp"
        />
      </div>
    </main>
  );
};
