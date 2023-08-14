import React from 'react';
import telegram from '../../../public/imgs/Telegram.svg';
import discord from '../../../public/imgs/Discord.svg';
import logo from '../../../public/imgs/logo2.png';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <div className="footer__info">
          <div className="footer__logo">
            <img src={logo} alt="" /> Pronin
          </div>
          <p className="footer__email">kolog007@gmail.com</p>
        </div>
        <div className="footer__article">Front-end developer</div>
      </div>
      <div className="footer__right">
        <p className="footer__media">Media</p>
        <div className="footer__links">
          <img src={telegram} alt="" className="footer__ico" />
          <a href="https://t.me/cptpronin" className="footer__link">
            <img src={discord} alt="" className="footer__ico" /> cptpronin
          </a>
          <a href="https://discordapp.com/users/593898381441499141" className="footer__link">
            <img src={discord} alt="" className="footer__ico" /> Lostofan
          </a>
        </div>
      </div>
    </footer>
  );
};
