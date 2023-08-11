import React from 'react';
import telega from '../imgs/Telegram.svg';

import '../styles/footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__info">
          <div className="footer__logo">
            <img src={require('../imgs/logo2.png')} alt="" /> Pronin
          </div>
          <p className="footer__email">kolog007@gmail.com</p>
        </div>
        <div className="footer__article">Front-end developer</div>
      </div>
      <div className="footer__right">
        <p className="footer__media">Media</p>
        <div className="footer__links">
          <img src={telega} alt="" className="footer__ico" />
          <a href="https://t.me/cptpronin" className="footer__link">
            <img src={telega} alt="" className="footer__ico" /> cptpronin
          </a>
          <a href="https://discordapp.com/users/593898381441499141" className="footer__link">
            <img src={require('../imgs/Discord.svg')} alt="" className="footer__ico" /> Lostofan
          </a>
        </div>
      </div>
    </footer>
  );
};
