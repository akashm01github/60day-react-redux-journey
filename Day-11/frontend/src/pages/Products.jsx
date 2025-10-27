import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Products = () => {

  const products = useSelector((state) => state.productReducer.products);
  console.log(products)

  const renderProduct = products.map((product)=>{
      return <div className='w-[300px] h-[500px]  bg-[#44444E] text-[#D3DAD9] mr-3 p-5 mb-3 rounded' key={product.id}>
          <img className='w-full h-[50%] object-cover' src={product.image} alt="" />
          <h1 className='text-md font-semibold text-yellow-300' >{product.title}</h1>
          <p>{product.description.slice(0,100)}...<span className='font-semibold text-yellow-100' >More Details</span></p>
          <div className='mt-3 flex justify-between p-2 items-center'>
            <p>{product.price}</p>
            <button className='border rounded-2xl px-4 py-1 active:scale-90'>Add to Cart</button>
          </div>

          <Link to={`/product/${product.id}`}  >More Info</Link>
      </div>
  })

  return products.length > 0 ? <div className='w-full p-2 gap-5  h-screen overflow-auto flex flex-wrap justify-center'>
    {renderProduct}
  </div> : <><h1>Loading....</h1></>
}

export default Products