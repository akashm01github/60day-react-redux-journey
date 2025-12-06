import React from 'react'
import Product from './components/Product'
// import { products } from './store/productList';

import  './App.css'
import { useSelector } from 'react-redux'

const App = () => {
  const products = useSelector((state)=>state.productList);

  console.log(products)

  return (
    <div className='products-container'>
        {products.map(({ title, rating, price, image,id })=>{
            return <Product key={id} title={title} rating={rating} price={price} image={image}/>
        })}
    </div>
  )
}

export default App