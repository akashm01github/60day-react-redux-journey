import React, { useState } from 'react';

import Create from './components/Create';
import Read from './components/Read';

const App = () => {

  return (
    <div className='bg-gray-300 w-full  px-4 py-8 flex flex-col justify-center items-center'>
      <Create/>
      <Read/>
    </div>
  )
}

export default App