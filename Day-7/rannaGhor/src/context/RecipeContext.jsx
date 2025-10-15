import React, { createContext, useEffect, useState } from 'react'

export const MyRecipeContext = createContext(null);

const RecipeContext = ({ children }) => {

  
  const [data, setdata] = useState([]);


  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem('recipes')) || [])
  },[])

  
  return (
    <div>
      <MyRecipeContext.Provider value={[data, setdata]}>
        {children}
      </MyRecipeContext.Provider>
    </div>
  )
}

export default RecipeContext