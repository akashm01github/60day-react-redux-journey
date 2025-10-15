import React, { useContext } from 'react'
import { MyRecipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) ||[];

  let renderData = favourite.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })
  return (
    <div className='flex justify-center  items-center flex-wrap gap-5 mt-4 py-5'>
      {favourite.length > 0 ? renderData : <h1 className='text-5xl font-semibold text-red-600'>No Data Found!</h1>}
    </div>
  )
}

export default Fav