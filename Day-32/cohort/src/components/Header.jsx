import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux';
import { updateAllProducts } from '../store/productsReducer';
import { fetchProducts } from '../store/productsReducer';
import { fetchCartItems, loadCartItem } from '../store/cartReducer';

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch({
      type:"api/makeCall",
      payload:{
        url:"products",
        onSuccess:updateAllProducts.type,

      }
    })
    // const fetchData = async()=>{
    //   dispatch(fetchProducts())
    //   const data = await fetch("https://fakestoreapi.com/products");
    //   const newData = await data.json();
    //   dispatch(updateAllProducts(newData))
    // }

    // fetchData()

    //  const fetchCartData = async()=>{
    //   dispatch(fetchCartItems())
    //   const data = await fetch("https://fakestoreapi.com/carts/5");
    //   const newData = await data.json();
    //   dispatch(loadCartItem(newData))
    // }

    // fetchCartData();


    
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
          <div className="cart-items-count">{(cartItems.reduce((acc, currentItem) => acc + currentItem.quantity, 0))}</div>
        </Link>
      </div>
    </header>
  )
}
