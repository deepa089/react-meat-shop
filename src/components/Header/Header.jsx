import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1  className='text-3xl bg-red-900 text-white text-center p-5'>The Meatup Shop</h1>
            <nav className='text-2xl bg-orange-950 text-gray-300 p-2'>
                <NavLink className='pr-10 p-2 m-1' to={`/`}>Home</NavLink>
                <NavLink className='pr-10 p-2 m-1' to={`/about`}>About Us</NavLink>
                <NavLink className='pr-10 p-2 m-1' to={`/meals`}>Meals</NavLink>
            </nav>
        </div>
    );
};

export default Header;