import React, { useRef } from 'react'

const MemoCount = () => {

    const renderCount = useRef(0);

    return (
        <div>
            <h1>Render Count: {renderCount.current++}</h1>
        </div>
    )
}

export default React.memo(MemoCount);