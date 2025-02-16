import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { price, image, title, description } = selectedProduct;
    const dispatch = useDispatch();

    useEffect(() => {
        getSelectedProduct(id);
    }, [id])

    const getSelectedProduct = (id) => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }
    return (
        <div>
            {title}
        </div>
    )
}

export default ProductDetails