import React from 'react'
import './whatlangmodel.css';
import FeatureSection from '../../components/featureSection/FeatureSection';

const WhatLangModel = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <FeatureSection
          title="What is a Language Model"
          text="A language model AI is a type of artificial intelligence (AI) that is trained on a massive dataset of text and code. This allows the model to learn the statistical relationships between words and phrases, and to use this knowledge to generate new text, translate languages, write different kinds of creative content, and answer your questions in an informative way."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='header__effects'>Revolutionize the field of AI</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <FeatureSection
          title="Machine Translation"
          text=" Language models can be used to translate text from one language to another. For example, Google Translate uses a language model to translate text between over 100 languages." />
        <FeatureSection
          title="Question Answering"
          text='Language models can be used to answer questions about a given topic. For example, if you ask "What is the capital of France?", you can use a language model to find the answer in a large dataset of text.' />
        <FeatureSection
          title="Text Generation"
          text="Language models can be used to generate text, such as poems, code, scripts, musical pieces, email, letters, etc. For example, you can use a language model to generate different creative text formats of text content." />
      </div>
    </div>
  )
}

export default WhatLangModel