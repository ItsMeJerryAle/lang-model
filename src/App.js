import React from 'react'

import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatLangModel } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg '>
        <Navbar />
        <Header />
        <div className='background'>
          <div className='elements'>
            <div class="square sq1"></div>
            <div class="square sq2"></div>
            <div class="square sq3"></div>
          </div>
        </div>
      </div>
      <Brand />
      <WhatLangModel />
      <Features /><div className='background'>
          <div className='elements'>
            <div class="square sq1"></div>
            <div class="square sq2"></div>
            <div class="square sq3"></div>
          </div>
        </div>
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App