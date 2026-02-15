import React, { useEffect, useState } from 'react'

import axios from 'axios';

import './LoadMore.css'

const LodeMore = () => {

    //! STATE

    const [isLoading, setIsLoading] = useState(false);

    const [products, setProducts] = useState([]);

    const [count, setCount] = useState(0);


    const [disabled, setDisabled] = useState(false)

    const fetchProducts = async () => {
        try {
            const resposnse = await axios.get(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            console.log(resposnse.data.products)


            if (resposnse && resposnse.data && resposnse.data.products) {
                setProducts((prev) => [...prev, ...resposnse.data.products]);
                setIsLoading(false)
            }
        }
        catch (error) {
            console.log("Error", error)
        }
    }



    useEffect(() => {
        fetchProducts()
    }, [count])


    // DISABLE BUTTON

    useEffect(() => {
        if (products && products.length === 100) setDisabled(true)
    }, [products])


    if (isLoading) {
        return <div>Loading Data.......</div>
    }


    return (
        <div className='container'>
            <div className='productContainer'>
                {
                    products && products.length ? products.map((item) => {
                        return (
                            <div key={item.id} className='product'>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        )
                    }) : <h1>Loading</h1>
                }
            </div>

            <div className='btnContainer'>
                <button disabled={disabled} onClick={() => { setCount(count + 1) }}>Load More Products</button>

                {disabled ? <h1>You have Reached 100 Product!!!!</h1> : null}
            </div>

        </div>
    )
}

export default LodeMore