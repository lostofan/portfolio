import React from 'react';
import '../styles/skills.scss';
import { HeadingDivider } from './HeadingDivider';

interface SkillsProps {
  isPage: boolean;
}
export const Skills: React.FC<SkillsProps> = ({ isPage }) => {
  return (
    <div className="main__skills-block">
      {isPage ? (
        <HeadingDivider name="skills" isTag={true} isLink={false} isLine={false} isBack={false} />
      ) : (
        <HeadingDivider name="skills" isTag={true} isLink={false} isLine={true} isBack={false} />
      )}
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
