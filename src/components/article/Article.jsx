import React from 'react'
import './article.css';



const Article = ({imgUrl, date, title, description}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog img" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p className='date'>{date}</p>
          <h3 className='title'>{title}</h3>
          <p className='description'>{description}</p>
        </div>
        <a href='home' className='read-more'>Read Full Article</a>
      </div>
    </div>
  )
}

export default Article