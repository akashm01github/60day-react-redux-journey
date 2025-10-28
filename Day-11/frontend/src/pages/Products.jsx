import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { asyncupdateuser } from '../store/actions/userActions';

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.products);
  const users = useSelector((state) => state.userReducer.users);




  const AddtoCartHandeler = (product) => {
    const copyuser = { ...users, cart:[...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);


    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 })
    }
    else {
      copyuser.cart[x] = {product,quantity:copyuser.cart[x].quantity+1};
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
    // console.log(copyuser);
  }



  const renderProduct = products.map((product) => {
    return <div className='w-[300px] h-[500px]  bg-[#44444E] text-[#D3DAD9] mr-3 p-5 mb-3 rounded' key={product.id}>
      <img className='w-full h-[50%] object-cover' src={product.image} alt="" />
      <h1 className='text-md font-semibold text-yellow-300' >{product.title}</h1>
      <p>{product.description.slice(0, 100)}...<span className='font-semibold text-yellow-100' >More Details</span></p>
      <div className='mt-3 flex justify-between p-2 items-center'>
        <p>{product.price}</p>
        <button onClick={() => { AddtoCartHandeler(product) }} className='border rounded-2xl px-4 py-1 active:scale-90'>Add to Cart</button>
      </div>

      <Link to={`/product/${product.id}`}  >More Info</Link>
    </div>
  })

  return products.length > 0 ? <div className='w-full p-2 gap-5  h-screen overflow-auto flex flex-wrap justify-center'>
    {renderProduct}
  </div> : <><h1>Loading....</h1></>
}

export default Products