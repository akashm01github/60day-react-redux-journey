import React from 'react'
import Header from '../components/Header'
// import { product } from '../productList'
import Product from '../components/Product'
import { useSelector } from 'react-redux'

const Home = () => {

  const productList = useSelector((state)=>state.productList);
  console.log(productList)
  return (
    <div className='flex flex-wrap gap-10 justify-center items-center mt-4 p-2'>
      {
        productList.map((singleProduct, idx) => {
          return <Product key={idx} singleProduct={singleProduct} />
        })
      }
    </div>
  )
}

export default Home