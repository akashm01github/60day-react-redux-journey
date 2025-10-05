import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Products = () => {
  let dataMy = useContext(DataContext);
  return (
    <div>
        <h1 className='text-3xl'>My Name : {dataMy}</h1>
    </div>
  )
}

export default Products