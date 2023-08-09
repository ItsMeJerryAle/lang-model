import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blogA, blogB, blogC, blogD, blogE } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="header__effects">
          There's a lot going on, 
          so here's a rundown of the top stories.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container-groupA">
            <Article imgUrl={blogA} date="August 17, 2023" title="ChatGPT, a powerful and versatile tool"
            description="ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations. It is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. You can ask ChatGPT a question about a topic you are interested in, and it will generate a detailed response..."/>
          </div>
          <div className="gpt3__blog-container-groupB">
            <Article imgUrl={blogB} date="July 24, 2023" title="Gigabit Internet Speed: The Key to a Faster, More Connected Life"/>
            <Article imgUrl={blogC} date="June 13, 2023" title="How AI is Changing the Way We Interact with Computers"/>
            <Article imgUrl={blogD} date="May 04, 2023" title="AI and the Future of Thinking"/>
            <Article imgUrl={blogE} date="April 14, 2023" title="The Conversation Revolution"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog