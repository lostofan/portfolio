import React from 'react';

import { Home } from '../../components/sections/Greeting/Greeting';
import { Projects } from '../../components/sections/Projects/Projects';
import { Skills } from '../../components/sections/Skills/Skills';
import { About } from '../../components/sections/About/About';
import { Contacts } from '../../components/sections/Contacts/Contacts';
import { Header } from '../../components/sections/Header/Header';

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
