import React from 'react'
import './features.css';
import { FeatureSection } from '../../components';

const featuresData = [
  {
    title: 'Improved communication',
    text: 'Language models can help us to communicate more effectively with each other. For example, they can be used to translate languages, generate text that is tailored to the specific needs of the audience, and answer questions in a clear and concise way.'
  },
  {
    title: 'Automated tasks',
    text: 'Language models can be used to automate tasks that are currently done by humans. For example, they can be used to generate reports, write emails, and even create creative content. This can free up humans to focus on more creative and strategic tasks.'
  },
  {
    title: 'New insights',
    text: 'Language models can be used to gain new insights into the world. For example, they can be used to analyze large amounts of text data to identify trends and patterns. This can be used to make better decisions about business, government, and even our personal lives.'
  },
  
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className="gpt3__features-heading">
        <h1 className="header__effects">AI Language Models: The Future of Human-Computer Interaction</h1>
        <p>Join the conversation now</p>
      </div>
      <div className="gpt3__features-container">
          {featuresData.map((item,index) => (
            <FeatureSection title={item.title} text={item.text} key={item.title + index}/>
          ))}
      </div>
    </div>
  )
}

export default Features