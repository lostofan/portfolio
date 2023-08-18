import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { en } from '../../public/locales/en';
import { ru } from '../../public/locales/ru';

import Head from 'next/head';
import { Header } from 'components/sections/Header/Header';
import { Greeting } from 'components/sections/Greeting/Greeting';
import { Projects } from 'components/sections/Projects/Projects';
import { Skills } from 'components/sections/Skills/Skills';
import { About } from 'components/sections/About/About';
import { Contacts } from 'components/sections/Contacts/Contacts';
import { Footer } from '../components/sections/Footer/Footer';

const Home: NextPage = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <title>{t.title}</title>
      </Head>
      <div className="App">
        <main>
          <div className="main__wrapper">
            <Header locale={t.header} />
            <Greeting locale={t.greeting} />
            <Projects isPage={false} locale={t.projects} />
            <Skills isPage={false} locale={t.skills} />
            <About isPage={false} locale={t.about} />
            <Contacts locale={t.contacts} />
          </div>
        </main>
        <div className="border-line"></div>
        <Footer locale={t.footer} />
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Home;
