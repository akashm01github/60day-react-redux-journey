import React from 'react'

const ChildComponents = React.memo(
    (props) => {
        console.log("Child Component Got Re-render Again");
        return (
            <div>
                <button className='btn' onClick={props.handelClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
)

export default ChildComponents