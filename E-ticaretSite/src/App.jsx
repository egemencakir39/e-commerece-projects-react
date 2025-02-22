import { useEffect, useState } from 'react'
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
import { removeFromBasket, setDrawer, totalPrice } from './redux/slices/basketSlice'


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalPrice());
  }, [])

  const removeItem = (id) => {
    dispatch(removeFromBasket(id));
    dispatch(totalPrice());
  }

  const { basketProducts, drawer, total } = useSelector((store) => store.basket)
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
                    <button onClick={() => removeItem(product.id)} style={{ margin: '10px' }} >Sil</button>
                  </div>
                )
              })

            }
            <div>
              <h3>Toplam Tutar:{total}</h3>
            </div>
          </Drawer>
        </PageContainer>
      </BrowserRouter>

    </div>
  )
}

export default App
