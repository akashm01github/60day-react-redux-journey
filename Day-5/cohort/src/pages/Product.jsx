import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate();


  const NavigateHandeler = (name) => {
    navigate(`/product/details/${name}`);
  }




  return (
    <div className='px-5 py-4'>
      <h1 className='text-3xl font-semibold'>Products</h1>
      <div className='flex flex-wrap justify-center items-center gap-4 mt-2  py-2'>

        {/* Prodct-1 */}
        <div className='border bg-[#F75270] w-[300px] mt-4 px-2 py-2 flex gap-2 flex-col rounded-lg border-[#DC143C]'>
          <h1 className='text-2xl font-semibold'>Product-1</h1>
          <p className='text-[#FDEBD0] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est.</p>

          <button onClick={() => { NavigateHandeler('Product-1') }} className='px-4 py-1 rounded bg-[#FDEBD0] font-semibold active:scale-85 transition-all cursor-pointer '>See Details</button>


        </div>


        {/* Prodct-2 */}
        <div className='border bg-[#F75270] w-[300px] mt-4 px-2 py-2 flex gap-2 flex-col rounded-lg border-[#DC143C]'>
          <h1 className='text-2xl font-semibold'>Product-2</h1>
          <p className='text-[#FDEBD0] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est.</p>
          <button onClick={() => { NavigateHandeler('Product-2') }} className='px-4 py-1 rounded bg-[#FDEBD0] font-semibold active:scale-85 transition-all cursor-pointer '>See Details</button>
        </div>

        {/* Prodct-3 */}
        <div className='border bg-[#F75270] w-[300px] mt-4 px-2 py-2 flex gap-2 flex-col rounded-lg border-[#DC143C]'>
          <h1 className='text-2xl font-semibold'>Product-3</h1>
          <p className='text-[#FDEBD0] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est.</p>
          <button onClick={() => { NavigateHandeler('Product-3') }} className='px-4 py-1 rounded bg-[#FDEBD0] font-semibold active:scale-85 transition-all cursor-pointer '>See Details</button>
        </div>
      </div>
       <Outlet/>
    </div>
  )
}

export default Product