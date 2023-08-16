import { NextPage } from 'next';
import Head from 'next/head';

import React from 'react';

import { Header } from 'components/sections/Header/Header';
import { Greeting } from 'components/sections/Greeting/Greeting';
import { Projects } from 'components/sections/Projects/Projects';
import { Skills } from 'components/sections/Skills/Skills';
import { About } from 'components/sections/About/About';
import { Contacts } from 'components/sections/Contacts/Contacts';
import { Footer } from '../components/sections/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div className="App">
        <main>
          <div className="main__wrapper">
            <Header />
            <Greeting />
            <Projects isPage={false} />
            <Skills isPage={false} />
            <About isPage={false} />
            <Contacts />
          </div>
        </main>
        <div className="border-line"></div>
        <Footer />
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Home;
