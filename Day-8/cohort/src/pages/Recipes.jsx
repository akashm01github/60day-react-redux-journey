import React, { useContext } from 'react'
import { recipeDataContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';


const Recipes = () => {
  
  const [data, setdata] = useContext(recipeDataContext);
  
  let renderData = data.map((recipe)=>{
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })

  return (
    <div className='px-10 py-5 mt-5 flex flex-wrap gap-5 justify-center items-center'>{data.length > 0 ? renderData : <h1 className='text-4xl'>No Data Found</h1>}</div>
  )
}

export default Recipes