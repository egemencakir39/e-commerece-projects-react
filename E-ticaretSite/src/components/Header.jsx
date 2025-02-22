import React from 'react'
import '../css/header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { useState } from 'react';
import Marque from './Marque';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';




function Header() {

    const [theme, setTheme] = useState(false);

    const { basketProducts } = useSelector((store) => store.basket);
    const dispatch = useDispatch();

    const changeTheme = () => {
        const root = document.getElementById("root")
        setTheme(!theme)
        if (theme) {
            root.style.backgroundColor = "rgb(83, 87, 87)"
            root.style.color = "#fff"
        } else {
            root.style.backgroundColor = "#fff"
            root.style.color = "black"
        }

    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <div className='flex-row'>
                <img className='logo' src="./Images/logo.png" alt="not found" />
                <p className='logo-text'>Hepsibir Arada</p>
            </div>
            <div className='flex-row'>
                <input className='input' type="text" placeholder='Aramak istediğiniz ürünü yazınız..' />
            </div>
            <div className='flex-row'>
                {theme ? <MdNightlightRound className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                <Badge onClick={() => dispatch(setDrawer())} badgeContent={basketProducts.length} color='error'>
                    <FaBasketShopping style={{ marginRight: '3px' }} className='icon' />
                </Badge>
                <span className='basket-text'>Sepet</span>
            </div>

        </div>
    )
}

export default Header