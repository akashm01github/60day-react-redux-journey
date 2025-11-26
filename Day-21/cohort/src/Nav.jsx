import React, { useEffect } from 'react'

const Nav = ({lang}) => {
    useEffect(()=>{
        setTimeout(()=>{
            lang.name = "Hello Redux"
        },5000);
    })
  return (
    <div>Nav</div>
  )
}

export default Nav