import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';


const App = () => {
  return (
    <div className='w-full h-full'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App