import { createContext, useState } from "react"

export const todoContext = createContext(null);

const Wraper = ({ children }) => {

  
  const [data, setData] = useState([]);

  return <todoContext.Provider value={[data,setData]}>
    {children}
  </todoContext.Provider>
}

export default Wraper