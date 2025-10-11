import React, { useContext } from 'react'
import { MyRecipeContext } from '../context/RecipeContext'

const Recipes = () => {
  const [data, setdata] = useContext(MyRecipeContext)

  let renderData = data.map((recipe)=>{
    return <h1 key={recipe.id}>{recipe.title}</h1>
  })
  return (
    <div>
      {renderData}
    </div>
  )
}

export default Recipes