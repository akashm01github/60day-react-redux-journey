import React from 'react'

const Product = ({singleProduct}) => {
  return (
     <div className="border-2 border-[#D9CFC7] p-5 w-80  rounded-lg bg-[#F5F2F2]" key={singleProduct.id}>
      <div className="" >
        <img className='w-full h-60' src={singleProduct.image} alt={singleProduct.title} />
      </div>
      <div>
        <h3 className='text-lg font-semibold'>
          <a href="#">{singleProduct.title}</a>
        </h3>
      </div>
      <div className="flex justify-between">
        <p className="text-xl font-semibold">{singleProduct.rating.rate} ★ ★ ★ ★</p>
        <p className="text-xl font-semibold">${singleProduct.price}</p>
      </div>
      <div className="flex justify-between mt-5">
        <button className='border bg-[#44444E] hover:bg-[#0F0E0E] text-white cursor-pointer px-3 py-1.5 rounded active:scale-90 transition-all'>Add to Cart</button>
        <button className='border bg-[#44444E] hover:bg-[#0F0E0E] text-white cursor-pointer px-3 py-1.5 rounded active:scale-90 transition-all'>Buy Now</button>
      </div>
    </div>
  )
}

export default Product