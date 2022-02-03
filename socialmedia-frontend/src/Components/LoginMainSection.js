import React, {useState} from 'react'
import {GiPartyPopper} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import InputStandart from './standarts/InputStandart';
import {useNavigate } from 'react-router-dom'

import login from "../Utils/login"
import api from '../Services/api';
import LoaderStandart from './standarts/LoaderStandart';

export default function LoginMainSection({updateUserID}) {
    const [username, setUser] = useState("")
    const [password, setPass] = useState("")

    const [loading, setLoading] = useState(false)

    const n = useNavigate()

    async function handler(e){
       

        try {

            setLoading(true)
            const resp = await api.post("login", {
                email:username,
                password
            })
            login(resp)
            const {data} = resp
            updateUserID(data.data._id)
            n("/")
            setLoading(false)
            
        } catch (error) {
            alert("Tente novamente mais tarde")

            setLoading(false)
        }
    }

    return (
        <main>
            <div className='form-login-register'>
                <GiPartyPopper className='logo'/>
                <form>
                    <fieldset>
                        {loading? 
                        <LoaderStandart/> 
                        : 
                        <>
                            <InputStandart id = "usuario" placeholder='Email' onChange={e=>setUser(e.target.value)}/>
                            <InputStandart id ='password' type='password' placeholder='Senha' onChange={e=>setPass(e.target.value)}/>
                            <button onClick={handler}>Login</button>
                            <div className='registre-se'>
                                <p> Quer entrar na festa?</p><Link to={"/Register"} className='link'>Cadastre-se</Link>
                            </div>
                       </> }
                    </fieldset>
                </form>
            </div>
        </main>
    )
    

}

