import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fethProductsError, updateAllProducts } from '../store/slices/productSlice';
import { productsList } from './../store/productsList';


export default function Header() {

  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
    
    fetch(`https://dummyjson.com/products`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      dispatch(updateAllProducts(data.products))
    }).catch((err)=>{
      dispatch(fethProductsError(err.message || 'Failed to fetch products'))
    })


  },[])

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}</div>
        </Link>
      </div>
    </header>
  )
}
