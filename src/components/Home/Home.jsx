import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
// import '../../App.css';
import Header from '../Header/Header';
import mealIcon from '../../assets/images/meal-icon.png';

const Home = () => {

    // const [latestMeals, setLatestMeal] = useState([]);
    // useEffect(() => {
    //     fetch("")
    // }, [])
    return (
        <div className='contain-container py-20 px-32'>
            <div className='flex justify-between border-b-4 border-gray-400'>
                <div className='w-1/4'>
                    <img src={mealIcon}></img>
                </div>
                <div className='w-3/4 p-10'>
                    <h2 className='text-4xl font-semibold my-auto text-center'>Welcome to The MealDB</h2>
                    <br />
                    <p> Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                        We also offer a free recipe API for anyone wanting to use it, with additional features for subscribers.
                    </p>
                    <br></br>
                    <br></br>
                    <p className='text-center'> Click button above to upgrade free API to premium for $3
                        Currently (54 supporters)</p>
                </div>
                <div className='float-right w-1/4'>
                    <img className='float-right' src={mealIcon}></img>
                </div>
            </div>
            <h1 className='mt-10 text-2xl text-center'> Latest Meal</h1>
            <div className='border-b-4 border-gray-400 '></div>
        </div>
    );
};

export default Home;