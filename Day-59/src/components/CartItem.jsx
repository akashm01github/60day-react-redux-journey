import React from 'react'

const CartItem = ({ id, price, title, rating, image }) => {
    return (
        <div className='flex justify-between items-center'>
           <div className='flex justify-center items-center mb-10 mt-10'>
             <img src={image} className='w-20 h-20' alt="" />
            <p className='text-sm'>{title}</p>
           </div>

           <p>{price}</p>
           <div>
            
           </div>
        </div>
    )
}

export default CartItem