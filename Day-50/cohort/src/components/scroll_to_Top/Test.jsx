import React from 'react'
import useFetchData from './useFetchData'

const Test = () => {

    const {data,error,pending} = useFetchData(`https://dummyjson.com/products`,{})

    console.log(data,error,pending)
  return (
    <div>
        <h1>Use Fetch Hook</h1>
        {
            pending ? <h2>Pending....</h2>:null
        }

        {
            data && data.products ? data.products.map((item)=>{
                return <p key={item.id}>{item.title}</p>
            }) : <></>
        }
    </div>
  )
}

export default Test