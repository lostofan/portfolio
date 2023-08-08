import React from 'react';
import './App.css';
import { MainPage } from './pages/main/MainPage';
import { Footer } from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/about/AboutPage';
import { WorksPage } from './pages/works/WorksPage';
AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <div className="border-line"></div>
      <Footer />
    </div>
  );
}

export default App;
