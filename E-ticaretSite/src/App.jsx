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
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'
import { setDrawer } from './redux/slices/basketSlice'


function App() {

  const dispatch = useDispatch();

  const { basketProducts, drawer } = useSelector((store) => store.basket)
  return (
    <div>
      <BrowserRouter>
        <Marque />
        <PageContainer>
          <Header />
          <RouterConfig />
          <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
            {
              basketProducts && basketProducts.map((product) => {
                return (
                  <div className='flex-row' style={{ padding: '30px' }}>
                    <img style={{ marginRight: '5px' }} src={product.image} width={60} height={70} />
                    <p style={{ width: '400px' }} >{product.title} ({product.count})</p>
                    <p style={{ fontWeight: 'bold', width: '60px' }} >{product.price}</p>
                    <button style={{ margin: '10px' }} >Sil</button>
                  </div>
                )
              })

            }
          </Drawer>
        </PageContainer>
      </BrowserRouter>

    </div>
  )
}

export default App
