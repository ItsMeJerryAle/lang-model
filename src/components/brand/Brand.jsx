import React from 'react'
import './brand.css';
import {
  google,
  deepmind,
  openai,
  huggingface
} from './import'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={deepmind} alt="Deepmind" />
      </div>
      <div>
        <img src={openai} alt="Openai" />
      </div>
      <div>
        <img src={huggingface} alt="Huggingface" />
      </div>
    </div>
  )
}

export default Brand