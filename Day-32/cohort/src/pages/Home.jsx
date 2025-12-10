import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'
import { getAllProducts, getProductLoadingState } from '../store/productsReducer';

export default function Home() {
  const productsList = useSelector(getAllProducts);
  const productsListIsLoading = useSelector(getProductLoadingState);


  // console.log(productsList)
  return productsListIsLoading ? (<h1>Loading.........</h1>) : (  <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId = {id}
          title={title}
          rating={rating.rate}
          price={price}
          image={image}
        />
      ))}
    </div>)
}
