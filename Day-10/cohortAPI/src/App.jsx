
import { useEffect } from 'react';
import axios from '../src/utils/Axios';


const App = () => {

  const getProduct = async()=>{
    try {

      const {data} =await axios.get(`/products`)
      console.log(data);

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    console.log('Hello')
  })

  

  return (
    <div>
      <button onClick={getProduct}>Get Product</button>
    </div>
  )
}

export default App