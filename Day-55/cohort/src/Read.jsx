import React, { useContext } from 'react'
import { todoContext } from './Wraper'

const Read = () => {
    const data = useContext(todoContext);

    console.log(data)
    return (
        <div>Read</div>
    )
}

export default Read