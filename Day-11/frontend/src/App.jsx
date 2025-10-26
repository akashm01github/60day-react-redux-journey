import axios from '../src/api/AxiosConfig'
import React, { useEffect } from 'react'
import { asyncgetUsers } from './store/userActions';

import { useSelector, useDispatch } from 'react-redux';


const App = () => {

  const dispatch  = useDispatch();

  const data = useSelector((state)=>state.user);

  console.log(data)


  useEffect(()=>{
    dispatch(asyncgetUsers())
  },[])


  return (
    <div className='text-2xl'>
      <h1>Hello</h1>
    </div>
  )
}

export default App;

