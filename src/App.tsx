import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dots } from './components/Dots';
AOS.init();

function App() {
  return (
    <div className="App">
      <Dots />
      <Header></Header>
      <Main></Main>
      <div className="border-line"></div>
      <Footer />
    </div>
  );
}

export default App;
