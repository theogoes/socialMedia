import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function HeaderNav({clearUserID}) {

    const n = useNavigate()

    function clear(){
        clearUserID()
        localStorage.clear()
        n('/')
    }

    return (
        <header>
            <nav>
                <div>
                    <h1><p id='P'>P</p>arti<p id='F'> F</p></h1>
                </div>
                    <p id='sair' onClick={clear}> Sair</p>
            </nav>
        </header>
    )

}

