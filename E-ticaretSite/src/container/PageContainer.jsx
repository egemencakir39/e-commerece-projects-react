import React from 'react'
import Container from '@mui/material/Container'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Marque from '../components/Marque'
import Product from '../components/Product'
import Slider from 'react-slick'
import ImageSlide from '../components/ImageSlide'
import ProductDetails from '../components/ProductDetails'

function PageContainer({ children }) {
    return (
        <Container maxWidth="xl">
            {children}
        </Container>
    )
}

export default PageContainer