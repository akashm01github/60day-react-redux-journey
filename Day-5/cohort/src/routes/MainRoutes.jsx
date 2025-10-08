import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';
import Product from './../pages/Product';
import Service from './../pages/Service';
import ProductDetails from '../components/ProductDetails';



const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/product' element={<Product />}>
                <Route path='/product/details/:name' element={<ProductDetails />} />
            </Route>
            
            <Route path='/service' element={<Service />} />
        </Routes>
    )
}

export default MainRoutes