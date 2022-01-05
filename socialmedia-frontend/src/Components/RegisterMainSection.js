import React from 'react'
import {GiPartyPopper} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import InputStandart from './standarts/InputStandart';
import NomeSiteStandart from './standarts/NomeSiteStandart';

function RegisterMainSection() {
    return (
        <main>
            <div className='form-login-register'>
                <GiPartyPopper className='logo'/>
                <form>
                     <NomeSiteStandart/>
                    <fieldset>
                        <InputStandart id="email" type='text' placeholder='Informe seu Email' />
                        <InputStandart id ="usuario" type='text' placeholder='Escolha seu Usuario'/>
                        <InputStandart id="password" type='password' placeholder='informe a sua Senha' />
                        
                        <button>Cadastre-se</button>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}

export default RegisterMainSection
