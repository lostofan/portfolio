import React from 'react';

import { Home } from '../../components/Greeting/Greeting';
import { Projects } from '../../components/Projects/Projects';
import { Skills } from '../../components/Skills/Skills';
import { About } from '../../components/About/About';
import { Contacts } from '../../components/Contacts/Contacts';
import { Header } from '../../components/Header/Header';

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
