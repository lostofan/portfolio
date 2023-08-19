import React, { useEffect } from 'react';

import { About } from '../../components/sections/About/About';
import { Skills } from '../../components/sections/Skills/Skills';
import { HeadingDivider } from '../../components/HeadingDivider/HeadingDivider';
import { useRouter } from 'next/router';
import { en } from '../../../public/locales/en';
import { ru } from '../../../public/locales/ru';
import styles from './aboutPage.module.scss';
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  return (
    <main className={styles.root}>
      <About isPage={true} locale={t.about} />
      <Skills isPage={true} locale={t.skills} />
      <HeadingDivider
        isTag={true}
        isLink={false}
        isLine={false}
        isBack={false}
        locale={[t.about.funfacts, t.about.viewall, t.about.back]}
      />
      <ul className={styles.factList}>
        {t.about.facts.map((fact, idx) => (
          <li className={styles.fact} key={idx}>
            {fact}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AboutPage;
