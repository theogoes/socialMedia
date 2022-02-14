import React, { useEffect } from 'react'

import SimpleHeader from '../Components/SimpleHeader'
import ProfileMainSection from '../Components/ProfileMainSection'
import { useParams } from 'react-router-dom'
import api from '../Services/api'
import PartyMainSection from '../Components/PartyMainSection'
import { useState } from 'react/cjs/react.development'

function Profile() {
    const {id} = useParams()
    const[tipo, setType] = useState(0);

    useEffect(() =>{
        async function geType(){
            try {
                const resp = await api.get("/users/"+id)
                
                console.log(tipo);
            } catch (error) {
                setType(1)
            }
        }
        geType()
    })
   
    return (
        <>
            <SimpleHeader/>
            {tipo === 0?
            <ProfileMainSection/>
            :
            <PartyMainSection/>
            }
        </>
    )
}

export default Profile
