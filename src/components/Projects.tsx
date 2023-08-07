import React from 'react';
import { ProjectItem } from './ProjectItem';

import '../styles/projects.scss';

export const Projects = () => {
  return (
    <div id="projects" className="main__projects projects">
      <div className="projects__heading headings">
        <h1 className="heading">
          <span className="tag">#</span>projects
        </h1>
        <div className="line"></div>
        <button className="heading__all-btn">View all ~~&gt;</button>
      </div>
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
          overview="Delivery shop"
          img={require('../imgs/delivery.jpg')}
          gif={require('../imgs/delivery.gif')}
          deploy="https://nimble-sopapillas-e354b5.netlify.app/"
          git="https://github.com/lostofan/delivery-shop"
        />
      </div>
    </div>
  );
};
