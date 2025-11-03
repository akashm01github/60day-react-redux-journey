import React from 'react'
import Nav from './components/Nav';
import MovieCard from './components/MovieCard';
import MainRoutes from './routes/MainRoutes';


const App = () => {

  return (
    <div className='w-full p-5 bg-[#121212] text-white'>
      <Nav />
      <MainRoutes/>
    </div>

  )
}

export default App