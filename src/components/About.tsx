import React from 'react';
import '../styles/about.scss';

export const About = () => {
  return (
    <div className="main__about about" id="about-me">
      <div className="about__heading headings">
        <h1 className="heading">
          <span className="tag">#</span>about-me
        </h1>
        <div className="line"></div>
      </div>
      <div className="about__wrapper">
        <div className="about__text">
          <p className="about__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem natus placeat rem,
            doloremque nihil debitis veniam enim suscipit quisquam ducimus voluptates minima
            perferendis optio ipsam asperiores alias rerum. Repellat?
            <br /> <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolorum dignissimos
            esse iste cupiditate, voluptates ducimus voluptatibus quisquam id. Aliquid quo impedit
            minima facere magnam consequatur corrupti dolorum id exercitationem?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eveniet nemo doloribus
            placeat alias quibusdam! Laborum voluptatum quaerat quam consequuntur quasi. Nobis
            similique consectetur facere neque nam eos, qui consequatur!
          </p>
          <button className="about__btn primary-btn">Read more -&gt;</button>
        </div>
        <div className="about__image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
