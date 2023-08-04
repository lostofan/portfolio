import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <div className="border-line"></div>
      <Footer />
    </div>
  );
}

export default App;
