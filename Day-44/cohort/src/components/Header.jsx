import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductLists, updateAllProducts } from '../store/slice/productsSlice';
import { fetchCartLists, loadCartItems } from '../store/slice/cartSlice';

export default function Header() {
  const cartItems = useSelector((state)=>state.cartItems.list);

  const dispatch = useDispatch();

  useEffect(()=>{
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
    
    dispatch({
      type:"api/makeCall",
      payload:{
        url:'/products',
        onSuccess: updateAllProducts.type,
        onStart:fetchProductLists.type
      }
    })

    
    dispatch({
      type:"api/makeCall",
      payload:{
        url:'/carts/5',
        onSuccess: loadCartItems.type,
        onStart:fetchCartLists.type
      }
    })


  },[])

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <i className="ri-shopping-bag-4-fill cart_icon"></i>
          <div className="cart-items-count">{cartItems.reduce((acc,curr)=>acc+curr.quantity,0)}</div>
        </Link>
      </div>
    </header>
  )
}
