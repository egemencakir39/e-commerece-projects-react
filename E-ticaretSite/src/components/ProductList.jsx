import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import { store } from '../redux/store.jsx'
import Product from './Product.jsx';
import ImageSlide from './ImageSlide.jsx';
import { CircularProgress, Box } from '@mui/material';


function ProductList() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((store) => store.product)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const productImages = products?.map(product => product.image);


    return (
        <div>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress size={60} />
                </Box>
            ) : (
                <>
                    <ImageSlide images={productImages} />
                    <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: "25px" }}>
                        {products && products.map((product) => (
                            <div key={product.id}>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductList