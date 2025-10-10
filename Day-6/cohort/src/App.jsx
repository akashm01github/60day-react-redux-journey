import React from 'react'
import Nav from './components/Nav'
import MainRoute from './routes/MainRoute'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div className=''>
      <Nav/>
      <MainRoute/>
    </div>
  )
}

export default App