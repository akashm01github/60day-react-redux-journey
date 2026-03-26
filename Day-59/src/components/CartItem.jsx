import React, { useState } from 'react'

const CartItem = ({id,title,price,image}) => {

    return (
        <div className='grid grid-cols-4 items-center py-4 border-b'>

            {/* Item */}
            <div className='flex items-center gap-3'>
                <img src={image} className='w-20 h-20 object-contain' alt="" />
                <p className='text-sm'>{title}</p>
            </div>

            {/* Price */}
            <p className='text-center'>₹{price}</p>

            {/* Quantity */}
            <div className='text-center'>
                <button 
                    className='bg-gray-600 text-white px-2 rounded mr-2 active:scale-90'
                >
                    +
                </button>

                {10}

                <button 
                    
                    className='bg-gray-600 text-white px-2 rounded ml-2 active:scale-90'
                >
                    -
                </button>
            </div>

            {/* Total */}
            <p className='text-center'>₹{200}</p>

        </div>
    )
}

export default CartItem