import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is iGEM? "
        text="iGEM is the premiere student competition in synthetic biology. Student teams are given a kit of biological parts and work over the summer to build and test biological systems in living cells, ranging from bacteria to mammalian cells."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore more</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Build a Better World with iGEM"
        text="The iGEM Foundation is an independent, non-profit organization dedicated to the advancement of synthetic biology, education and competition, and the development of an open community and collaboration. This is done by fostering an open, cooperative community and friendly competition."
      />
      <Feature
        title="World Class Biosafety and Biosecurity"
        text="iGEM is unique in our comprehensive and thorough approach to synthetic biology. With our world class safety and security program, we lead the field by fostering an environment of mindful and responsible work."
      />
      <Feature
        title="Connected Worldwide Community"
        text="The After iGEM Program connects everyone who has gone through the iGEM Competition since its inception in 2004. After iGEM is a way to continue to make an impact on the world. You are the leaders of the field -- and we want to help you succeed."
      />
    </div>
  </div>
);

export default WhatGPT3;
