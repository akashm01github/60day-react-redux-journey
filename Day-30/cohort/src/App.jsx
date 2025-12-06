import React from 'react'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'

import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
