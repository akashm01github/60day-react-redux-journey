import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../pages/Home';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import CreateRecipe from '../pages/CreateRecipe';
import SingleRecipes from '../pages/SingleRecipes';
import PageNotFound from '../pages/PageNotFound';
import Fav from '../pages/Fav';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/details/:id' element={<SingleRecipes/>}/>
        <Route path='/create~recipe' element={<CreateRecipe/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/fav' element={<Fav/>}/>
    </Routes>
  )
}

export default MainRoutes