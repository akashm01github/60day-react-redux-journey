import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from './../pages/Movies';
import TvShows from './../pages/TvShows';
import MyMovies from './../pages/MyMovies';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movies' element={<Movies/>} />
            <Route path='/tvShows' element={<TvShows/>} />
            <Route path='/my-list' element={<MyMovies/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes