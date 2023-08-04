import React from 'react';

import '../styles/footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__info">
          <img src="" alt="" className="footer__logo" />
          <p className="footer__name">Pronin</p>
          <p className="footer__email">kolog007@gmail.com</p>
        </div>
        <div className="footer__article">Front-end developer</div>
      </div>
      <div className="footer__right">
        <p className="footer__media">Media</p>
        <div className="footer__links">
          <a href="#" className="footer__link">
            <img src="" alt="" className="footer__ico" />
          </a>
          <a href="#" className="footer__link">
            <img src="" alt="" className="footer__ico" />
          </a>
          <a href="#" className="footer__link">
            <img src="" alt="" className="footer__ico" />
          </a>
        </div>
      </div>
    </footer>
  );
};
