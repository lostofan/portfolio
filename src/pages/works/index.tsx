import React, { useEffect } from 'react';
import { Projects } from '../../components/sections/Projects/Projects';

import { HeadingDivider } from '../../components/HeadingDivider/HeadingDivider';
import { ProjectItem } from '../../components/ProjectItem/ProjectItem';
import { useRouter } from 'next/router';
import { en } from '../../../public/locales/en';
import { ru } from '../../../public/locales/ru';

const WorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  return (
    <main className="worksPage" style={{ overflow: 'hidden' }}>
      <Projects isPage={true} locale={t.projects} />
      <HeadingDivider
        isTag={true}
        isLink={false}
        isLine={false}
        isBack={false}
        locale={[t.projects.small, t.projects.viewall, t.projects.back]}
      />
      <div className="projects__wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectItem
          stack="Javascript SCSS HTML"
          name="Posts"
          overview={t.projects.overview[4]}
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
