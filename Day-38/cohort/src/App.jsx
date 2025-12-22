import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <MainRoutes/>
    </div>
  )
}

export default App