import React, {useState, useEffect} from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/cyber.png';



const Header = () => {

    const [count, setCount] = useState("6500");

    useEffect(()=> {
      let start = 6500;
      const end = 6948;

      if(start===end) return;

      let totalMilSecDur = 5;
      let incrementTime = (totalMilSecDur / end) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(String(start))
        if (start === end) clearInterval(timer)       
      }, incrementTime);

    },[]);


    return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='header__effects hero'>
          Explore beyond the wonders of a Language Model
        </h1>
        <p>
          Probabilistic model of a natural language that can generate probabilities of a series of words, based on text corpora in one or multiple languages it was trained on.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email address' />
          <button type="button">Lets Start</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>{count} users are interested</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header