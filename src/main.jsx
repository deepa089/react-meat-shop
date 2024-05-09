import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Meals from './Meals/Meals.jsx';
import Categories from './components/Categories/Categories.jsx';
// import 

const routes = createBrowserRouter([
  {
    path : "/",
    // element : <Home></Home>,
    element : <App></App>,
    children : [
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/meals",
        loader : () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element : <Categories></Categories>,
      },
      {
        path : "/meals/:category",
        loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`), 
        element : <Meals></Meals>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)
