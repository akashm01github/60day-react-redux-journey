import React, { createContext } from 'react'

export const DataContext  = createContext();

const UserContext = ({children}) => {
    let userName = "Akash Mukherjee"
  return (
    <div>
        <DataContext.Provider value={userName}>
             {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext