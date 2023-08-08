import React from 'react'

import  { Article, Brand, CTA, Feature, Navbar } from './components'; 
import  { Blog, Features, Footer, Header, Possibility, WhatLangModel } from './containers'; 
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatLangModel />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App