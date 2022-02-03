import React from 'react'
import LoginMainSection from '../Components/LoginMainSection'

function Login({updateUserID}) {
    return (
        <>
            <LoginMainSection updateUserID = {updateUserID}/>
        </>
    )
}

export default Login
