import React, { useRef } from 'react'

import './scroll.css';

const ScrollToPerticular = () => {

    const myRef = useRef();

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#574964'
            }
        },
        {
            label: 'Scoend Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#AEB784'
            }
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#8494FF'
            }
        },
        {
            label: 'Forth Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#FFD400'
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#B7BDF7'
            }
        },
    ]


    const handelScroll = () => {
        let pos = myRef.current.getBoundingClientRect().top;

        window.scroll({
            top: pos,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            <h1>Scroll to a Perticular Segment</h1>
            <button onClick={handelScroll}>Click to Scroll</button>
            {
                data.map((item, idx) => {
                    return <div ref={idx === 3 ? myRef : null} key={idx} style={item.style}>
                        <h3>{item.label}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default ScrollToPerticular