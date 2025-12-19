import React, { useEffect } from 'react'
import useToggle from './useToggle';
import useFetchData from './useFetchData';
import Home from './Home';

const App = () => {

  const [value,toggleValue] = useToggle(true);


  const [product] = useFetchData();

  console.log(product)

  return (
    <div>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={()=>toggleValue(false)}>Hide Heaading</button>
      <button onClick={()=>toggleValue(true)}>Show Heaading</button>
      
      {
        value ? <h1>Castom Hooks</h1> :<></>
      }

      <Home/>
    </div>
  )
}

export default App;