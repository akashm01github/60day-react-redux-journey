import React, { useState } from 'react'
import Nav from './Nav'

const App = () => {
  const [lang, setLang] = useState({ name: "JS" });

  const handleClick = ()=>{
    alert(lang.name)
  }



  return (
    <div>
      <button onClick={handleClick}>Show Alert My Name</button>
      <Nav lang={lang}/>
    </div>
  )
}

export default App