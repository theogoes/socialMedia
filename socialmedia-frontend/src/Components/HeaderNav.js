import React from 'react'
import {Link} from 'react-router-dom'

export default function HeaderNav() {
    return (
        <header>
            <nav>
                <div>
                    <h1><p id='P'>P</p>arti<p id='F'> F</p></h1>
                </div>
                <Link to={'/'} className='link'>
                    <p id='sair'> Sair</p>
                </Link>
            </nav>
        </header>
    )

}

