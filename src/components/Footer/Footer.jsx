import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-red-900 flex justify-between'>
            <p className='text-white p-5'>
                © 2024 TheMealDB
            </p>
            <div className=''>
            <p className='text-white text-center'>Join Social Media
            </p>
            <div className='flex'>
            <a className='mr-1' href="https://www.facebook.com/TheDataDB/"><img src="https://www.themealdb.com/images/facebook_icon.png"/></a>
            <a className='mr-1' href="https://www.facebook.com/TheDataDB/"><img src="https://www.themealdb.com//images/twitter_icon.png"/></a>
            <a className='mr-1' href="https://www.facebook.com/TheDataDB/"><img src="https://www.themealdb.com//images/discord_icon.png"/></a>
            </div>
            </div>
            <div>
                <p className='text-white '>Know More:
                    <br></br>
                    <a href='/about' className='mr-10'>About</a>
                    <a href="https://www.thecocktaildb.com" target='_blank'  className='mr-10'>Cocktails</a>
                    <a href="https://www.thesportsdb.com"  target='_blank' className='mr-10'>Sports</a>
                </p>
            </div>

        </div>
    );
};

export default Footer;