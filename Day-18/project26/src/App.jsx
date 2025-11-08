import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App