import React, { useEffect } from 'react';

import '../../styles/aboutPage.scss';
import { About } from '../../components/About';
import { Skills } from '../../components/Skills';
import { HeadingDivider } from '../../components/HeadingDivider';

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="aboutPage">
      <About isPage={true} />
      <Skills isPage={true} />
      <HeadingDivider
        name="my-fun-facts"
        isTag={true}
        isLink={false}
        isLine={false}
        isBack={false}
      />
    </main>
  );
};
