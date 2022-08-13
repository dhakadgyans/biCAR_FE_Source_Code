import React from 'react';
import Navbar from './Navbar';


function Header() {
    return (
        <div id ='main'>
            <Navbar/>
            <div className='name'>
                <h1>Welcome to <span>BiCAR App</span><br/></h1>
                <h3>Book a BiCAR to Shopping malls, Restaurants, Cinemas etc from Anywhere at just One Click!</h3>
                <a href='/signin' className='cv-btn'>Get Started !</a>
            </div>
        </div>
    )
}

export default Header;
