import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const navigate = useNavigate();

    const { name } = useParams();
    return (
        <div className='px-6 py-3'>
            <div className="card w-[300px]  rounded bg-[#D3DAD9] p-2 mt-3 flex flex-col gap-2">
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <p className='text-[#37353E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem adipisci commodi incidunt voluptate, asperiores repudiandae culpa tempore accusantium in...<b className='text-[#715A5A]'>more</b></p>
                <button onClick={() => { navigate(-1) }} className='border font-semibold p-2 rounded-2xl bg-[#715A5A] text-[#D3DAD9] active:scale-80 transition-all'>Go Back</button>
            </div>
        </div>
    )
}

export default ProductDetails