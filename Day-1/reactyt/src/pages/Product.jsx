import React, { useContext } from 'react'
import { DataContext } from '../context/Usercontext'

const Product = () => {
  let name = useContext(DataContext);
  return (
    <div>
        <h1 className='text-3xl font-semibold'>Products</h1>
        <h2>My Name is : {name}</h2>
    </div>
  )
}

export default Product