import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    const {id,title,recipe_url,description,ingredients,instructions,price,catagories} = recipe;

  return (
    <Link to={`/recipe/details/${id}`} className='rounded-xl bg-[#719192] px-3 py-1 w-[300px] flex flex-col gap-3 justify-center items-center'>
        <div className='w-full h-[200px]'>
            <img  src={recipe_url} alt="" className='rounded w-full h-full object-cover' />
        </div>
        <h1 className='text-2xl'>{title}</h1>
        <p>{description.slice(0,100)}...<small className='text-[#212121] font-semibold'>More</small></p>
    </Link>
  )
}

export default RecipeCard