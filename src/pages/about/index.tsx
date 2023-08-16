import React, { useEffect } from 'react';

import { About } from '../../components/sections/About/About';
import { Skills } from '../../components/sections/Skills/Skills';
import { HeadingDivider } from '../../components/HeadingDivider/HeadingDivider';

const AboutPage = () => {
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

export default AboutPage;
