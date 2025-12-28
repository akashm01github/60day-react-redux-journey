import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductLists, updateAllProducts } from '../store/slices/productsSlice'
import { loadCartItems } from '../store/slices/cartSlice'

export default function Header() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProductLists());
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const productsList = await data.json();
      dispatch(updateAllProducts(productsList))
    }
    fetchProducts();

    const fetchCart = async () => {
      const data = await fetch("https://fakestoreapi.com/carts/5");
      const cartList = await data.json();
      dispatch(loadCartItems(cartList))
    }

    fetchCart();



    
  }, [])

  const cartItems = useSelector((state) => state.cartItems)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count"> {cartItems.reduce(
            (accumulator, currentItem) => accumulator + currentItem.quantity,
            0
          )}</div>
        </Link>
      </div>
    </header>
  )
}
