import React from 'react'
import { products } from './store/productList'
import Product from './components/Product'
import './App.css'
import { useSelector } from 'react-redux'

const App = () => {

  const productList = useSelector((state)=>state.product);
  // console.log(a)


  return (
    <div className='products-container'>
        {
          productList.map(({ title, rating, price, image,id })=>{
             return <Product key={id} title={title} rating={rating} price={price} imageUrl={image}/>
          })
        }
    </div>
  )
}

export default App;