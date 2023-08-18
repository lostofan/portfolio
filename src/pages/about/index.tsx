import React, { useEffect } from 'react';

import { About } from '../../components/sections/About/About';
import { Skills } from '../../components/sections/Skills/Skills';
import { HeadingDivider } from '../../components/HeadingDivider/HeadingDivider';
import { useRouter } from 'next/router';
import { en } from '../../../public/locales/en';
import { ru } from '../../../public/locales/ru';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  return (
    <main className="aboutPage">
      <About isPage={true} locale={t.about} />
      <Skills isPage={true} locale={t.skills} />
      <HeadingDivider
        isTag={true}
        isLink={false}
        isLine={false}
        isBack={false}
        locale={[t.about.funfacts, t.about.viewall]}
      />
    </main>
  );
};

export default AboutPage;
