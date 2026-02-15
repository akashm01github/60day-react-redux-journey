import React, { useState } from 'react'
import './Tab.css'
const CastomTab = ({ tabsContent, onChange }) => {

    // To track the active tab index
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handelOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex);
    }


    return (
        <div className='wrapper'>
            <div className='heading'>
                {
                    tabsContent.map((tabItem, index) => {
                        return (
                            <div onClick={() => handelOnClick(index)}  className={`tab_item ${currentTabIndex === index ? 'active' : ''}`}  key={tabItem.label}>
                                <span className='label'>{tabItem.label}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className='content'>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default CastomTab