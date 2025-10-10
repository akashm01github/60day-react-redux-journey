import React, { createContext, useState } from 'react'

export const ContactContext = createContext(null);

const UserConext = ({ children }) => {


  const [usersData, setusersData] = useState([])



  return (
    <ContactContext.Provider value={{ usersData, setusersData }}>
      {children}
    </ContactContext.Provider>
  )
}

export default UserConext