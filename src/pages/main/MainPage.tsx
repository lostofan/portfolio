import React from 'react';

import { Home } from '../../components/Home';
import { Projects } from '../../components/Projects';
import { Skills } from '../../components/Skills';
import { About } from '../../components/About';
import { Contacts } from '../../components/Contacts';
import { Header } from '../../components/Header';

export const MainPage = () => {
  return (
    <main>
      <div className="main__wrapper">
        <Header />
        <Home />
        <Projects isPage={false} />
        <Skills isPage={false} />
        <About isPage={false} />
        <Contacts />
      </div>
    </main>
  );
};
