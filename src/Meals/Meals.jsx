import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../components/Category/Category';

const Meals = () => {
    const dataObj = useLoaderData();
    const meals = dataObj.meals
    // console.log(dataObj.meals);
    return (
        <div>
            <h1 className='text-4xl ml-10 mb-5'>Choose Category : {meals.length}</h1>
            <div className='grid grid-cols-4 gap-4'>
            {
                //  categories.map((category, idx) =><Category key={idx} category={category}></Category> )
            }
            </div>
        </div>
    );
};

export default Meals;