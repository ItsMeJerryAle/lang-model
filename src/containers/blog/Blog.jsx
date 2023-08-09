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
            <Article imgUrl={blogA} date="August 17, 2023" title="Sample Title"/>
          </div>
          <div className="gpt3__blog-container-groupB">
            <Article imgUrl={blogB} date="August 17, 2023" title="Sample Title"/>
            <Article imgUrl={blogC} date="August 17, 2023" title="Sample Title"/>
            <Article imgUrl={blogD} date="August 17, 2023" title="Sample Title"/>
            <Article imgUrl={blogE} date="August 17, 2023" title="Sample Title"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog