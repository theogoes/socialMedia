import React from 'react'
import FeedContainer from '../Components/FeedContainer'
import HeaderNav from '../Components/HeaderNav'
import BottomNav from '../Components/BottomNav'


function Fedd({clearUserID}) {
    return (
        <>
            <HeaderNav clearUserID={clearUserID}/>
            <FeedContainer/>
            <BottomNav/>
        </>
    )
}

export default Fedd
