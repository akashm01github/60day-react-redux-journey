import React, { createContext, useState } from 'react'

export const DataContext = createContext();
const UserContext = ({children}) => {
    const [usersData, setusersData] = useState([]);

  return (
    <div>
        <DataContext.Provider value={{usersData, setusersData}}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext