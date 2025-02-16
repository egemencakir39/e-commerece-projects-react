import React from 'react'
import '../css/header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { useState } from 'react';
import Marque from './Marque';


function Header() {

    const [theme, setTheme] = useState(false);

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
                <img className='logo' src="./src/images/logo.png" alt="not found" />
                <p className='logo-text'>Hepsibir Arada</p>
            </div>
            <div className='flex-row'>
                <input className='input' type="text" placeholder='Aramak istediğiniz ürünü yazınız..' />
            </div>
            <div className='flex-row'>
                {theme ? <MdNightlightRound className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                <FaBasketShopping className='icon' />
                <span className='basket-text'>Sepet</span>
            </div>
        </div>
    )
}

export default Header