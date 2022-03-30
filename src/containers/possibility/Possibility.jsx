import React from 'react';
import research from '../../assets/research.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={research} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Workshops</h1>
      <p>
        A Workshop and lecture series on various aspects in biotechnology.We are
        pleased to announce the conduct of a seminar on Fungal Biology at the
        Indian Institute of Technology Madras on 22 and 23 September. The event
        will serve as a two-day workshop on basic concepts in fungal biology.
        The event will also provide participants with an e-certificate to all
        participants on both days. The event will be conducted in Seminar Hall,
        Department of Biotechnology, Bhupat and Jyoti Mehta School of
        Biosciences, Indian Institute of Technology Madras.{' '}
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
