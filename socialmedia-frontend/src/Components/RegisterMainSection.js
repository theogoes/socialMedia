import React, {useState} from 'react'
import {GiPartyPopper} from 'react-icons/gi'
import {useNavigate} from 'react-router-dom'
import api from '../Services/api';
import login from '../Utils/login';

import InputStandart from './standarts/InputStandart';
import LoaderStandart from './standarts/LoaderStandart';
import NomeSiteStandart from './standarts/NomeSiteStandart';

function RegisterMainSection({updateUserID}) {
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [loading, setLoading] = useState(false)

    const n = useNavigate()

    async function register(e){
        e.preventDefault()

        try {
            setLoading(true)
            const resp = await api.post('users',{
                email : email,
                userName: userName,
                password: password,
                avatar : "avatar"
            })
            const {data} = resp
            login(resp)
            updateUserID(data.data._id)
            n("/")
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log("nanana"+error)
            console.log( await api.get("users"))
        }

    }

    return (
        <main>
            <div className='form-login-register'>
                <GiPartyPopper className='logo'/>
                <form>
                    <NomeSiteStandart/>
                    {loading?
                        <LoaderStandart/>
                        : 
                        <fieldset>
                            <>

                                <InputStandart id="email" type='text' placeholder='Informe seu Email' onChange={e=>setEmail(e.target.value)} />
                                
                                <InputStandart id="email" type='text' placeholder='Informe seu Email novamente' onChange={e=>setEmail2(e.target.value)} />
                                
                                <InputStandart id ="usuario" type='text' placeholder='Escolha seu Usuario' onChange={e=>setUsername(e.target.value)}/>
                                
                                <InputStandart id="password" type='password' placeholder='informe a sua Senha' onChange={e=>setPassword(e.target.value)}/>
                                
                                <InputStandart id="password" type='password' placeholder='informe a sua Senha novamente' onChange={e=>setPassword2(e.target.value)}/>
                                
                                
                                {email && userName && password && email2 && password2 &&<button onClick={register}>Cadastre-se</button>}
                            </>
                        </fieldset>
                    }
                </form>
            </div>
        </main>
    )
}

export default RegisterMainSection
