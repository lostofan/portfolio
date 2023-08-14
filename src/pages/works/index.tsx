import React, { useEffect } from 'react';
import { Projects } from '../../components/Projects/Projects';

import { HeadingDivider } from '../../components/HeadingDivider/HeadingDivider';
import { ProjectItem } from '../../components/ProjectItem/ProjectItem';

const WorksPage = () => {
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
          stack="Javascript SCSS HTML"
          name="Posts"
          overview="Список постов на чистом JS с возможностью удаления и добавления новых, посты открываются в модальном окне со списком комментариев + пагинация"
          img="/imgs/posts.jpg"
          gif="/imgs/posts.gif"
          deploy="https://snazzy-narwhal-a01a9c.netlify.app/"
          git="https://github.com/lostofan/posttest"
        />
      </div>
    </main>
  );
};

export default WorksPage;
