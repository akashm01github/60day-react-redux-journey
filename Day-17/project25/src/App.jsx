import React from 'react'
import UserDetails from './pages/UserDetails'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='bg-[#0B0B0B] text-white'>
        <Nav/>
        <MainRoutes/>
    </div>
  )
}

export default App