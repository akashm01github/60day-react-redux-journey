import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate =  useNavigate();

    const navigateHandeler  =(name)=>{
        navigate(`/product/details/${name}`)
        console.log(name)
    }
    return (
        <div className=' px-6 py-3 ]'>
            <h1 className='text-3xl mb-2'>Product Lists:</h1>
            <hr />
            <div className='flex flex-wrap gap-4 mb-2'>
                {/* Card-1 */}
                <div className="card w-[300px]  rounded bg-[#D3DAD9] p-2 mt-3 flex flex-col gap-2">
                    <h1 className='text-2xl font-semibold'>Product -1</h1>
                    <p className='text-[#37353E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem adipisci commodi incidunt voluptate, asperiores repudiandae culpa tempore accusantium in...<b className='text-[#715A5A]'>more</b></p>
                    <button onClick={()=>{navigateHandeler("Product-1")}} className='border font-semibold p-2 rounded-2xl bg-[#715A5A] text-[#D3DAD9] active:scale-80 transition-all'>See Details</button>
                </div>

                {/* Card-2 */}
                <div className="card w-[300px]  rounded bg-[#D3DAD9] p-2 mt-3 flex flex-col gap-2">
                    <h1 className='text-2xl font-semibold'>Product -2</h1>
                    <p className='text-[#37353E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem adipisci commodi incidunt voluptate, asperiores repudiandae culpa tempore accusantium in...<b className='text-[#715A5A]'>more</b></p>
                    <button onClick={()=>{navigateHandeler("Product-2")}} className='border font-semibold p-2 rounded-2xl bg-[#715A5A] text-[#D3DAD9] active:scale-80 transition-all'>See Details</button>
                </div>


                {/* Card-3 */}
                <div className="card w-[300px]  rounded bg-[#D3DAD9] p-2 mt-3 flex flex-col gap-2">
                    <h1 className='text-2xl font-semibold'>Product -3</h1>
                    <p className='text-[#37353E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem adipisci commodi incidunt voluptate, asperiores repudiandae culpa tempore accusantium in...<b className='text-[#715A5A]'>more</b></p>
                    <button onClick={()=>{navigateHandeler("Product-3")}} className='border font-semibold p-2 rounded-2xl bg-[#715A5A] text-[#D3DAD9] active:scale-80 transition-all'>See Details</button>
                </div>
            </div>

            <hr />

            <Outlet/>
        </div>
    )
}

export default Product