import React from 'react';
import '../styles/contacts.scss';

export const Contacts = () => {
  return (
    <div className="main__contacts contacts" id="contacts">
      <div className="headings">
        <h1 className="heading">
          <span className="tag">#</span>contacts
        </h1>
        <div className="line"></div>
      </div>
      <div className="contacts__wrapper">
        <div className="contacts__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatem nam ab! Ullam
          molestiae dolore beatae dolores laboriosam ad, sapiente molestias, iste qui provident
          earum, saepe quasi. Non, magni beatae.
        </div>
        <div className="contacts__links">
          <h2 className="contacts__heading">Message me here</h2>
          <div className="contacts__link">
            <img src="" alt="" className="contacts__ico" />
            <p className="contacts__nickname">lostofan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
