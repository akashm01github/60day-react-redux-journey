import React from 'react'
import Header from '../components/Header'
import { product } from '../productList'
import Product from '../components/Product'

const Home = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center items-center mt-4 p-2'>
      {
        product.map((singleProduct, idx) => {
          return <Product key={idx} singleProduct={singleProduct} />
        })
      }
    </div>
  )
}

export default Home