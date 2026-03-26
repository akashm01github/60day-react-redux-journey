import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'
import ProductList from './components/ProductList'
import Home from './components/Home'

const MainRoutes = () => {
  return (
        <Routes>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
  )
}

export default MainRoutes