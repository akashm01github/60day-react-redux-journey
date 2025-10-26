import axios from '../src/api/AxiosConfig'
import React, { useEffect } from 'react'
import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { asynccurrentuser } from './store/actions/userActions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch  = useDispatch();
  useEffect(()=>{
    dispatch(asynccurrentuser());
  },[])

  return (
    <div className='w-screen h-screen bg-gray-800 text-white font-thin px-[10%]'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App;

