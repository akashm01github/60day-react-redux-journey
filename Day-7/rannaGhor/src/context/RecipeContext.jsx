import React, { createContext, useState } from 'react'

export const MyRecipeContext = createContext(null);

const RecipeContext = ({children}) => {
    const [data, setdata] = useState([])
  return (
    <div>
        <MyRecipeContext.Provider value={[data, setdata]}>
            {children}
        </MyRecipeContext.Provider>
    </div>
  )
}

export default RecipeContext