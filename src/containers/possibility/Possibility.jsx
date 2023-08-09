import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/hacker.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className="gpt3__possiblity-img">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possiblity-content">
        <h4>Get Early Access to get ahead of the pack</h4>
        <h1 className='header__effects'>The key to a more connected world at your fingertips</h1>
        <p>Despite these challenges, AI language models have the potential to be a powerful tool for improving our lives. As they continue to develop, we will need to be mindful of the potential risks and take steps to mitigate them. However, with careful use, AI language models can help us to create a more connected, informed, and productive world.</p>
        
        <h4>Get Early Access to get ahead of the pack</h4>
      </div>
    </div>
  )
}

export default Possibility;