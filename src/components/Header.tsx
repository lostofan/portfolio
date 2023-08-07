import React from 'react';
import '../styles/header.scss';
export const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={require('../imgs/logo2.png')} alt="" /> Pronin
        </div>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__btn">
                <span className="tag">#</span>
                home
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__btn">
                <span className="tag">#</span>
                works
              </a>
            </li>
            <li className="nav__item">
              <a href="#about-me" className="nav__btn">
                <span className="tag">#</span>
                about-me
              </a>
            </li>
            <li className="nav__item">
              <a href="#contacts" className="nav__btn">
                <span className="tag">#</span>
                contacts
              </a>
            </li>
            <li className="nav__item">
              <div className="header__language-selector">EN</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
