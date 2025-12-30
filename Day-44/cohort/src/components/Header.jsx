import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProductsData, fetchProductLists, updateAllProducts } from '../store/slice/productsSlice';
import { fetchAllCartItemsData, fetchCartLists, loadCartItems } from '../store/slice/cartSlice';
import { fetchData } from '../store/middleware/api';

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems.list);

  const dispatch = useDispatch();

  useEffect(() => {
    //! NORMAL API CALL
    // const fetchData = async()=>{
    //   dispatch(fetchProductLists())
    //   const data = await fetch("https://fakestoreapi.com/products");
    //   const productsList = await data.json();
    //   dispatch(updateAllProducts(productsList));
    // }
    // fetchData()


    // const fectchCartData = async()=>{
    //   dispatch(fetchCartLists());
    //   const data = await fetch("https://fakestoreapi.com/carts/5");
    //   const cartList = await data.json();
    //   dispatch(loadCartItems(cartList))
    // }
    // fectchCartData();
  

   //! CASTOM API MIDDLEWARE 
    // dispatch(
    //   fetchData({
    //     url: '/products',
    //     onSuccess: updateAllProducts.type,
    //     onStart: fetchProductLists.type
    //   })
    // )

    //! CASTOM API MIDDLEWARE 

    // dispatch(fetchData({
    //   url: '/carts/5',
    //   onSuccess: loadCartItems.type,
    //   onStart: fetchCartLists.type
    // }))


    // !ASYNC THUNK
    dispatch(fetchAllProductsData())

    dispatch(fetchAllCartItemsData())


  }, [])

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <i className="ri-shopping-bag-4-fill cart_icon"></i>
          <div className="cart-items-count">{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}</div>
        </Link>
      </div>
    </header>
  )
}
