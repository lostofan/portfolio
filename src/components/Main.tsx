import React from 'react';

import { Home } from './Home';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { About } from './About';
import { Contacts } from './Contacts';

export const Main = () => {
  return (
    <main>
      <div className="main__wrapper">
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </div>
    </main>
  );
};
