import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDetails from '../pages/UserDetails'
import Register from '../pages/Register'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/user-details' element={<UserDetails/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes