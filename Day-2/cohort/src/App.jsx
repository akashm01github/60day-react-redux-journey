import React, { useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import axios from 'axios'
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([])

  let usersData =async ()=>{

    let response  =await axios.get(`https://picsum.photos/v2/list`);

    setData(response.data);
    
  }



  let users = data.map((element,idx) => {
      return <Card key={idx} userData={element}/>
  });

  return (
    <div className='p-10 flex flex-col justify-center items-center flex-wrap gap-4'>
      <button onClick={()=>{usersData()}} className='bg-amber-400 px-4 py-2 rounded font-semibold active:scale-80 transition-all'>Load Data</button>
      <div className='p-10 flex justify-center items-center flex-wrap gap-4'>
      {users}
    </div>
    </div>
  )
}

export default App