import { NextPage } from 'next';
import Head from 'next/head';

import React from 'react';

import { Header } from 'components/Header/Header';
import { Greeting } from 'components/Greeting/Greeting';
import { Projects } from 'components/Projects/Projects';
import { Skills } from 'components/Skills/Skills';
import { About } from 'components/About/About';
import { Contacts } from 'components/Contacts/Contacts';
import { Footer } from '../components/Footer/Footer';

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
