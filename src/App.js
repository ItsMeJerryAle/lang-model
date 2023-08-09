import React from 'react'

import  { Brand, CTA, Navbar } from './components'; 
import  { Blog, Features, Footer, Header, Possibility, WhatLangModel } from './containers'; 
import './App.css';

const App = () => {
  return (
    <div className='App background'>
        <div className='gradient__bg elements'>
          <Navbar /> 
          <Header />
          <div class="square sq1"></div>
          <div class="square sq2"></div>
          <div class="square sq3"></div>
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