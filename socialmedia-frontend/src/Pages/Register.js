import React from 'react'
import RegisterMainSection from '../Components/RegisterMainSection'
import SimpleHeader from '../Components/SimpleHeader'


function Register({updateUserID}) {
    return (
        <>
            <SimpleHeader/>
            <RegisterMainSection updateUserID = {updateUserID}/>
        </>
    )
}

export default Register
