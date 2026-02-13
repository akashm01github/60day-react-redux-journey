import React from 'react'
import CastomTab from './CastomTab'

const TabTest = () => {


    function randomComponent() {
        return (
            <h1>This is Contact Page</h1>
        )
    }




    const tabs = [
        {
            label: 'Home',
            content: <div>This is Home Page</div>
        },
        {
            label: 'About',
            content: <div>This is About Page</div>
        },
        {
            label: 'Contact',
            content: randomComponent()
        }
    ]



    function handelChange(currentTabIndex){
        console.log(currentTabIndex)
    }



    return (
        <div>
            <CastomTab tabsContent={tabs} onChange={handelChange} />
        </div>
    )
}

export default TabTest