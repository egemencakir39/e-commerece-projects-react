import React from 'react'
import '../css/product.css'
import { FaBasketShopping } from "react-icons/fa6";
import ReactStars from "react-stars";
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    if (!product) return null;

    const { id, category, price, image, title, description, rating } = product;
    const navigate = useNavigate();

    return (
        <div className='allDiv'>
            <span onClick={() => navigate("/product-details/" + id)} className='allBtn' >
                <div className='card'>

                    <div className='img'>
                        <img className='image' src={image} alt="" />
                    </div>

                    <div className='text'>
                        <h3 className='category'>{category}</h3>
                        <h5 className='title'>{title}</h5>

                    </div>
                    <div className='subElements'>
                        <p className='price'>{price} ₺</p>
                        <button><FaBasketShopping className='icon2' />Sepete Ekle</button>
                    </div>
                    <div>
                        <ReactStars className='rate'
                            count={5}
                            value={rating.rate}
                            size={24}
                            color2={'#ffd700'}
                            color1={'#ddd'}
                            edit={false}
                        />
                    </div>

                </div>
            </span>
        </div >
    )
}
export default Product