import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import ProductDetails from '../pages/ProductDetails'

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/product' element={<Product />}>
                    <Route path='/product/details/:name' element={<ProductDetails />} />
                </Route>

                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default MainRoute