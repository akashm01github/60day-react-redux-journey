import axios from '../api/AxiosConfig';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadlazyproduct } from '../store/reducers/productSlice';

const useInfiniteProduct = () => {
    const { products } = useSelector((state) => state.productReducer);
    const [hasMore, sethasMore] = useState(true);
    const dispatch = useDispatch();



    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(`/products?_start=${products.length}&_limit=6`);
            if (data.length == 0) {
                sethasMore(false)

            }
            else {
                sethasMore(true)
                // setproducts([...products, ...data]);
                dispatch(loadlazyproduct(data))
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchProducts();
    }, [])
    return {products,hasMore,fetchProducts};
}

export default useInfiniteProduct




