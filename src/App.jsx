import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
    const location = useLocation();
    return (
        <div className='w-full md:w-auto m-10 mt-0'>
            <Header></Header>
            <div className='contain-container'>
                {
                    location.pathname == "/" ? 
                    <Home></Home> :   <Outlet/>
                }
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App
