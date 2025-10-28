import axios from '../src/api/AxiosConfig'
import React, { useEffect } from 'react'
import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { asynccurrentuser } from './store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadproducts } from './store/actions/productActions';

const App = () => {
  const dispatch  = useDispatch();

  const users = useSelector((state)=>state.userReducer.users);
  const products = useSelector((state)=>state.productReducer.products);

  



  useEffect(()=>{
    !users && dispatch(asynccurrentuser());
  },[users])


   useEffect(()=>{
    products.length == 0 && dispatch(asyncloadproducts());
  },[products])

  return (
    <div className='w-full  bg-gray-800 text-white font-thin px-[10%]'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App;

