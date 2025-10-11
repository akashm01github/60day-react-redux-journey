import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='bg-gray-800 py-10 px-[10%] text-white font-thin w-screen'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App