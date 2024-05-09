import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {
    const categoriesObj = useLoaderData();
    const categories = categoriesObj.categories
    return (
        <div>
            <h1 className='text-4xl ml-10 mb-5'>Choose Category : {categories.length}</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    // categories.map((category, idx) => <Category key={idx} category={category}></Category>)
                    categories.map((category,idx) => <Category key={idx} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;