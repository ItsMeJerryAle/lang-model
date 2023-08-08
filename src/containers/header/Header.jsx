import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/sample.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Explore beyond the wonders of a Language Model
        </h1>
        <p>
        Probabilistic model of a natural language that can generate probabilities of a series of words, based on text corpora in one or multiple languages it was trained on.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email address'/>
          <button type="button">Lets Start</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>6,900 users are interested</p>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="AI" />
        </div>
      </div>
    </div>
  )
}

export default Header