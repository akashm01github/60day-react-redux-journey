import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const navigate = useNavigate();
    const params = useParams();

  console.log(params);
  return (
    <div className='mt-10 bg-[#FEF3E2] px-5 py-2'>
        <h1 className='text-2xl text-[#DD0303] font-bold'>{params.name}</h1>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam perferendis iure, nobis quisquam dolorum porro! Magnam ullam eius quibusdam illo!</p>
        <button onClick={()=>navigate('/product')} className='px-4 py-1 rounded bg-[#FAB12F] mt-3 hover:bg-[#FA812F] text-white font-semibold active:scale-85 transition-all cursor-pointer '>Go BACK</button>
        <button onClick={()=>navigate('/about')} className='ml-3 px-4 py-1 rounded bg-[#FAB12F] mt-3 hover:bg-[#FA812F] text-white font-semibold active:scale-85 transition-all cursor-pointer '>Go to About</button>
    </div>
  )
}

export default ProductDetails