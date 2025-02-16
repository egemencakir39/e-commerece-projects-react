import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Marque from './components/Marque'
import Product from './components/Product'
import Slider from 'react-slick'
import ImageSlide from './components/ImageSlide'
import RouterConfig from './config/RouterConfig'
import { BrowserRouter } from 'react-router'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Marque />
        <PageContainer>
          <Header />
          <RouterConfig />
        </PageContainer>
      </BrowserRouter>

    </div>
  )
}

export default App
