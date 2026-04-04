import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {

  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.map(({ productId, quantity }) => {
      const cartProduct = products.list.find((product) => product.id === productId);
      return {...cartProduct, quantity};
    })
  });

  console.log(cartItems)

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, images, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={images[0]}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${cartItems.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)}</div>
        </div>
      </div>
    </div>
  )
}
