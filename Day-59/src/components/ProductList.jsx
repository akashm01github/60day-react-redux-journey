import React from 'react'
import { useSelector } from 'react-redux'

const ProductList = () => {

    const products  = useSelector((state)=>state.products)


    return (
        <div>
            <div className='flex justify-center flex-wrap items-center gap-5 py-5 px-2'>
                {
                    products.map((singleProduct) => {
                        return <div
                            key={singleProduct.id}
                            className='px-2 py-5 rounded-lg bg-[#F2EAE0] flex flex-col items-center border border-[#A98B76] w-80 min-h-96 justify-between'
                        >
                            <img src={singleProduct.image} className='w-40 h-40 object-contain' alt="" />
                            <h3 className='font-semibold text-left text-xl'>{singleProduct.title}</h3>
                            <div className='flex justify-between items-center w-full px-2 py-3'>
                                <p>★ ★ ★ ★</p>
                                <p>₹200</p>
                            </div>
                            <div className='flex justify-between items-center w-full px-2 py-3'>
                                <button className='px-4 py-2 font-semibold bg-amber-400 rounded-2xl active:scale-90'>Add to Cart</button>
                                <button className='px-4 py-2 font-semibold bg-purple-400 rounded-2xl active:scale-90'>Buy Now</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductList