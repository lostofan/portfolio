import React from 'react';
import '../styles/skills.scss';

export const Skills = () => {
  return (
    <div className="main__skills-block">
      <div className="headings">
        <h1 className="heading">
          <span className="tag">#</span>skills
        </h1>
        <div className="line"></div>
      </div>
      <div className="main__skills_wrapper">
        <div className="main__skills skills">
          <div className="skills__item skills__languages" data-aos="fade-left">
            <p className="skills__name">Languages</p>
            <p className="skills__list">JavaScript TypeScript</p>
          </div>
          <div className="skills__item skills__other" data-aos="fade-left">
            <p className="skills__name">Other</p>
            <p className="skills__list">HTML5 CSS3 SCSS REST</p>
          </div>
          <div className="skills__item skills__tools" data-aos="fade-down-left">
            <p className="skills__name">Tools</p>
            <p className="skills__list">VSCode Linux Git Figma Photoshop</p>
          </div>
          <div className="skills__item skills__frameworks" data-aos="fade-up-left">
            <p className="skills__name">Frameworks</p>
            <p className="skills__list">React Redux Toolkit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
