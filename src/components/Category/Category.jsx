import { Link, useNavigate } from 'react-router-dom';

const Category = ({category}) => {
    const {strCategory, strCategoryThumb} = category;
    const navigate = useNavigate();
    // const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/meals/${strCategory}`);
        console.log('i m here');
    }

    return (
        <div className='justify-center'>
            <img className='mx-auto' src={strCategoryThumb} onClick={handleOnClick}>
                {/* <Link to={`/meal/${strCategory}`}></Link> */}
            </img>
            <p className='text-center text-gray-600'> <Link to={`/meals/${strCategory}`}> {strCategory}</Link> </p>
        </div>
    );
};

export default Category;