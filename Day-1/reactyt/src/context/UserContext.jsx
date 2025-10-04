import React, { createContext } from 'react'


export const DataContext = createContext();

const Usercontext = ({children}) => {
    
    const username = "Akash Mukherjee";
  return (
    <div>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default Usercontext