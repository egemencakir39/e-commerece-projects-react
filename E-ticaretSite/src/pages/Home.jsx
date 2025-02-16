import React from 'react'
import ProductList from '../components/ProductList'
import ImageSlide from '../components/ImageSlide'
import Product from '../components/Product'

function Home() {
    return (
        <div>
            <ImageSlide />
            <ProductList />
            <Product />
        </div>
    )
}

export default Home