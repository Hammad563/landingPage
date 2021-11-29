import React from 'react';
import './navbar.css';
import logo from '../../img/logo.png'

const NavBar = () => {
    return (
        <div className='Container'>
            <div className='NavItems'>
                <div className='logo'>
                    <img src='' alt="" />
                </div>
                <div className='button'>
                    <a href="#">Shop Now</a>
                </div>
            </div>
        </div>
    )
}
export default NavBar;