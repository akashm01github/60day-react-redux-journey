import axios from '../src/api/AxiosConfig'
import React from 'react'

const App = () => {

  const getProduct = async () => {
    const { data } = await axios.get('/products');
    console.log(data)
  }

  getProduct();


  return (
    <div className='text-2xl'>
      <h1>Hello</h1>
    </div>
  )
}

export default App;
