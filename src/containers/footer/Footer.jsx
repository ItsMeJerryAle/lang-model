import React from 'react'
import './footer.css';
import ai from '../../assets/lang-logo.png'

import { RiLinkedinBoxFill, RiGithubFill,RiMailFill, RiMapPinFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='header__effects'>Explore more for the future</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={ai} alt="logo" />
          <p>Front-end with React JS by zErr</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>UI/UX Web Designs</h4>
          <a href="#home">Language AI Model</a>
          <a href="#home">FullStack</a>
          <a href="#home">Mobile Applications</a>
          <a href="#home">Wordpress</a>
        </div>
        
        <div className="gpt3__footer-links_div">
          <h4>Other Projects</h4>
          <a href="#home">React Native Mobile Applications</a>
          <a href="#home">Full Stack React Websites</a>
          <a href="#home">Wordpress Websites</a>
          <a href="#home">Laravel Websites</a>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <a href="#home">
            <RiMailFill color="fff" size={27} /> &nbsp; alejerry24@gmail.com</a>
          <a href="#home"><RiMapPinFill color="fff" size={27} /> &nbsp;Bohol Philippines</a>
          <div className="social-media">
            <RiLinkedinBoxFill color="fff" size={27} />
            <RiGithubFill color="fff" size={27} />
          </div>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Created on 2022 by zErr</p>
      </div>
    </div>
  )
}

export default Footer