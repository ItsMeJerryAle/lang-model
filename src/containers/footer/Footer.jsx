import React from 'react'
import './footer.css';
import ai from '../../assets/lang-logo.png'

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
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Sample Address</p>
          <p>Sample Contact #</p>
          <p>Email</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Created on August 2023 by zErr</p>
      </div>
    </div>
  )
}

export default Footer