import React from 'react'
import {GiPartyPopper} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import InputStandart from './standarts/InputStandart';

export default function LoginMainSection() {
    return (
        <main>
            <div className='form-login-register'>
                <GiPartyPopper className='logo'/>
                <form>
                    <fieldset>
                        <InputStandart id = "usuario" placeholder='Usuario'/>
                        <InputStandart id ='password' type='password' placeholder='Senha' />
                        <button>Login</button>
                        <div className='registre-se'>
                            <p> Quer entrar na festa?</p><Link to={"/Register"} className='link'>Cadastre-se</Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
    )
    

}

