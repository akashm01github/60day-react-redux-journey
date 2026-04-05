import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchError, fetchProduct, updateAllProducts } from '../store/slices/productSlice';
import { fetchCartItems, loadCartItems } from '../store/slices/cartSlice';

export default function Header() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());


    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateAllProducts(data.products))
      }).catch((err)=>{
        dispatch(fetchError(err.message))
      })


      dispatch(fetchCartItems());

      fetch(`http://localhost:3000/cart/1`)
      .then((res) => res.json())
      .then((data)=>{
        dispatch(loadCartItems(data))
      })
  }, [])

  const cartItems = useSelector((state) => state.cartItems.list);
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
