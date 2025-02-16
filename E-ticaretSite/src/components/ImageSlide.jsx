import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/slider.css'



function ImageSlide({ images }) {
    if (!images) return null;

    const limitedImages = images.slice(1, 4)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
    };



    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {limitedImages.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="notFound" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default ImageSlide