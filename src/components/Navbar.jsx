import React, { useState } from 'react';
import logo from '../images/bicar.png';
import {Link} from 'react-router-dom';


function Navbar() {
    const [nav, setnav] =useState(false);
    const changeBackground = ()=>{
        if(window.scrollY >=50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className= {nav ? 'nav active' : 'nav'}>
            <Link to="/">
            <img src={logo} alt="biCAR LOGO" />
          </Link>
            <input type='checkbox' className='menu-btn' id = 'menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
        <ul className='menu'>
            <li><Link to='/features' className='active'>Features</Link></li>
            <li><Link to='/pricing' className='active'>Pricing</Link></li>
            <li><Link to='/deals' className='active'>Deals</Link></li>
            <li><Link to='/Login' className='active'>Login</Link></li>
           
        </ul>
        </nav>
    )
}

export default Navbar;
