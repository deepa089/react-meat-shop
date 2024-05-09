import React from 'react';
import meatupImg from '../../assets/images/icon.png';

const About = () => {
    return (
        <div className='items-center py-20 px-32'>
            <h2 className='text-center text-2xl'> About the Shop</h2>
            <br />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad distinctio
                quaerat voluptatem magni. Atque, debitis voluptatibus reprehenderit et saepe voluptatem
                excepturi omnis veniam laboriosam beatae sapiente iste accusamus aliquam!</p>
            <br></br>
            <p> TheMealDB was built in 2016 to provide a free data source api for recipes online
                in the hope that developers would build applications and cool projects ontop of it.
                TheMealDB originated on the Kodi forums as a way to browse recpies on your TV.</p>
                <br></br>
                <br></br>
            <img className='mx-auto' src={meatupImg} />
        </div>
    );
};

export default About;