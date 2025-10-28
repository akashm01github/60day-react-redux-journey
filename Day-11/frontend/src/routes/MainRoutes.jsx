import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import UnAuthWrapper from './UnAuthWrapper';

// import Home from '../pages/Home'
// import Products from '../pages/Products';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import CreateProduct from './../pages/admin/CreateProduct';
// import ProductDetails from '../pages/admin/ProductDetails';
// import UserProfile from '../pages/user/UserProfile';
// import PageNotFound from '../pages/PageNotFound';
// import AuthWrapper from './AuthWrapper';
// import Cart from '../pages/Cart';


// ! For Lazy Loading
const Home = lazy(()=> import('../pages/Home'));
const Products = lazy(()=> import('../pages/Products'));
const Login = lazy(()=> import('../pages/Login'));
const Register = lazy(()=> import('../pages/Register'));
const CreateProduct = lazy(()=> import('./../pages/admin/CreateProduct'));
const ProductDetails = lazy(()=> import('../pages/admin/ProductDetails'));
const UserProfile = lazy(()=> import('../pages/user/UserProfile'));
const PageNotFound = lazy(()=> import('../pages/PageNotFound'));
const AuthWrapper = lazy(()=> import('./AuthWrapper'));
const Cart = lazy(()=> import('../pages/Cart'));




const MainRoutes = () => {

  const {users} = useSelector((state)=>state.userReducer);
  // console.log(users);


  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        {/* <Route path='/products' element={<Products/>}/> */}


        <Route path='/login' element={<UnAuthWrapper><Login/></UnAuthWrapper>}/>
        <Route path='/register' element={<UnAuthWrapper><Register/></UnAuthWrapper>}/>




       
        <Route path='/admin/create-product' element={<AuthWrapper><CreateProduct/></AuthWrapper>}/>
        <Route path='/admin/user-profile' element={<AuthWrapper><UserProfile/></AuthWrapper>}/>
        
        <Route path='/product/:id' element={<AuthWrapper><ProductDetails/></AuthWrapper>}/>

        <Route path='/cart' element={<AuthWrapper><Cart/></AuthWrapper>}/>


        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default MainRoutes