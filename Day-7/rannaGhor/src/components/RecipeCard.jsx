import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    const {id,title,recipe_url,description,ingredients,price} = recipe;
    return (
        <div>
            <Link to={`/recipes/details/${id}`} className='border hover:scale-90 transition-all w-[400px] px-3 py-2 flex flex-col gap-3 justify-center items-center rounded'>
                <div className='w-full flex justify-center'>
                    <img className='w-full h-[200px] object-cover rounded' src={recipe_url} alt="" />
                </div>
                <h1 className='text-3xl font-semibold'>{title}</h1>
                <p>{description.slice(0,100)}... <small className='text-lg font-semibold text-yellow-300'>More</small></p>
            </Link>
        </div>
    )
}

export default RecipeCard