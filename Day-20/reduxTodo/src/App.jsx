import React from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col gap-20 justify-center items-center'>
      <AddTask/>
      <Tasks/>
    </div>
  )
}

export default App