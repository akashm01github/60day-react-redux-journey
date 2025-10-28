import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../store/actions/userActions';

const Cart = () => {
  const products = useSelector((state) => state.productReducer.products);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const IncreseQuantityHandeler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = { ...copyuser.cart[index], quantity: copyuser.cart[index].quantity + 1 };

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  }

  const DecreaseQuantityHandeler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if(users.cart[index].quantity > 0){
      
      copyuser.cart[index] = { ...copyuser.cart[index], quantity: copyuser.cart[index].quantity - 1 };
    }

    else{
       copyuser.cart.splice(index,1);
    }


    dispatch(asyncupdateuser(copyuser.id, copyuser));
  }




  const renderData = users.cart.map((cartItem, index) => {
    return <li key={cartItem.product.id} className='mt-5 border p-5 flex justify-between items-center gap-10'>
      <img src={cartItem.product.image} alt="" className='w-[10vmax] h-[10vmax] object-contain' />
      <h1 className='text-xl'>{cartItem.product.title}</h1>
      <h1 className='text-xl'>${cartItem.product.price}</h1>

      <p className='flex items-center gap-4 p-2'>
        <button onClick={() => IncreseQuantityHandeler(index, cartItem)} className='text-2xl'>+</button>
        <span className='text-2xl'>{cartItem.quantity}</span>
        <button onClick={() => DecreaseQuantityHandeler(index, cartItem)} className='text-2xl'>-</button>
      </p>
    </li>
  })

  return (
    <ul>
      {renderData}
    </ul>
  )
}

export default Cart