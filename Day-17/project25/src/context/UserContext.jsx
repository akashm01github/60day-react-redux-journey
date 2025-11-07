import React, { createContext, useEffect, useState } from 'react'

export const UserDetailContext = createContext(null)

const UserContext = ({ children }) => {
  const [userDetails, setuserDetails] = useState([]);

  
  useEffect(() => {
    const storedUsers = localStorage.getItem("userDetails");
    if (storedUsers) {
      setuserDetails(JSON.parse(storedUsers));
    }
  }, []);



  
  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);


  return (
    <UserDetailContext.Provider value={[userDetails, setuserDetails]}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default UserContext