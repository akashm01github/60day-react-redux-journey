import React, { Suspense, useEffect, useState } from 'react'
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { asyncupdateuser } from '../store/actions/userActions';
import axios from '../api/AxiosConfig';
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadlazyproduct } from '../store/reducers/productSlice';
import useInfiniteProduct from '../utils/useInfiniteProduct';
// import ProductTemplate from '../components/ProductTemplate';

const ProductTemplate = lazy(()=>import('../components/ProductTemplate'));

const Products = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.users);

  const {products,hasMore,fetchProducts} = useInfiniteProduct();


  const renderProduct = products.map((product) => <ProductTemplate key={product.id} product={product} />)

  return products.length > 0 ? <div>
    <InfiniteScroll dataLength={products.length} next={fetchProducts} hasMore={hasMore} loader={<h4>Loading...</h4>} endMessage={
      <p style={{ textAlign: 'center' }}>
        <b className='text-2xl'>Yay! You have seen it all</b>
      </p>
    } >
      <div className='w-full p-2 gap-5  flex flex-wrap justify-center'>
        {products.map((product) => (
          <Suspense
            key={product.id}
            fallback={<h1 className="text-center text-red-600 text-2xl font-semibold">Loading...</h1>}
          >
            <ProductTemplate product={product} />
          </Suspense>
        ))}

      </div>
    </InfiniteScroll>
  </div> : <><h1>Loading....</h1></>
}

export default Products