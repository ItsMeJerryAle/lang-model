import React from 'react'
import './whatlangmodel.css';
import FeatureSection from '../../components/featureSection/FeatureSection';

const WhatLangModel = () => {
  return (
    <div className='gpt3__whatlangmodel section__margin' id="wgpt3">
      <div className="gpt3__whatlangmodel-feature">
        <FeatureSection />
      </div>
      <div className="gpt3__whatlangmodel-heading">
        <h1 className='gradient__text'>Revolutionize the field of AI</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatlangmodel-container">
        <FeatureSection />
        <FeatureSection />
        <FeatureSection />
      </div>
    </div>
  )
}

export default WhatLangModel