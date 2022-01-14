import React, {useState} from 'react'
import {GiPartyPopper} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import InputStandart from './standarts/InputStandart';
import {useNavigate} from 'react-router-dom'

import api from '../Services/api';

export default function LoginMainSection() {
    const [username, setUser] = useState("")
    const [password, setPass] = useState("")

    const n = useNavigate()

    async function handler(e){
        e.preventDefault()

        try {
            const resp = await api.post("login", {
                email:username,
                password
            })
            const {data} = resp
            const userId = data.data._id
            const userName = data.data.userName

            localStorage.setItem("FuserID",userId)
            localStorage.setItem("FuserName",userName)

            n("/feed")
        } catch (error) {
            alert("deu ruim mane : " + error)
        }
    }

    return (
        <main>
            <div className='form-login-register'>
                <GiPartyPopper className='logo'/>
                <form>
                    <fieldset>
                        <InputStandart id = "usuario" placeholder='Email' onChange={e=>setUser(e.target.value)}/>
                        <InputStandart id ='password' type='password' placeholder='Senha' onChange={e=>setPass(e.target.value)}/>
                        <button onClick={handler}>Login</button>
                        <div className='registre-se'>
                            <p> Quer entrar na festa?</p><Link to={"/Register"} className='link'>Cadastre-se</Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
    )
    

}

