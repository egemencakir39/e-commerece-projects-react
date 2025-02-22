import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css'
import ReactStars from "react-stars";
import { store } from '../redux/store'
import { addToBasket } from '../redux/slices/basketSlice';



function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { price, image, title, description, rating } = selectedProduct;
    const dispatch = useDispatch();
    if (!selectedProduct) return null;
    const count = 1;

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count,
        }
        dispatch(addToBasket(payload))

    }

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
        <div style={{ display: 'flex' }}>
            <div className='ımg'>
                <img src={image} alt="" />
            </div>
            <div className='Alltext'>
                <div className='textArea'>
                    <h3>{title}</h3>
                    <div style={{ display: 'flex' }}>
                        <ReactStars
                            count={5}
                            value={rating.rate}
                            size={24}
                            color2={'#ffd700'}
                            color1={'#ddd'}
                            edit={false}
                        />
                        <p style={{ marginTop: "6px", marginLeft: "9px" }}> {rating.rate}  {rating.count} Değerlendirme</p>

                    </div>
                    <p>{description}</p>
                    <h4>{price} TL</h4>
                </div>
                <div className='btn'>
                    <button onClick={addBasket} >Sepete ekle</button>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails