import React from 'react';
import people from '../../assets/people.png';
import capsule from '../../assets/capsule.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing </h1>
      <p>
        The International Genetically Engineered Machine (iGEM) competition
        began in January 2003 as an independent study course at the
        Massachusetts Institute of Technology (MIT) which later became a summer
        competition with 5 teams in 2004. It has now expanded to 310 teams in
        2017, reaching more than 40 countries.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={capsule} />
    </div>
  </div>
);

export default Header;
