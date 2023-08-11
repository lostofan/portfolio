import React from 'react';

import '../styles/home.scss';
import '../styles/animations.scss';

export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__text">
        <div className="home__heading">
          Hi! My name is Artem. I'm a<span className="text__highlight"> front-end developer</span>.
        </div>
        <div className="home__article">
          He crafts responsive websites where technologies meet creativity
        </div>
        <button className="home__contact-button primary-btn">
          <a href="mailto:kolog007@gmail.com" className="home__mailLink">
            Contact me
          </a>
        </button>
      </div>
      <div className="home__image">
        <img className="home__logo" src={require('../imgs/logo.png')} alt="" />
        <img src="" alt="" />
        <div className="home__current-work current">
          <div className="current__ico"></div>
          <p className="current__article">
            Currently working on <span className="current__highlight">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
};
