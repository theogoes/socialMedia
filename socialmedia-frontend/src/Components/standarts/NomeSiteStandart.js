import React from 'react'
import { Link } from 'react-router-dom'

function NomeSiteStandart() {
    return (
        <div className='divLogo'>
          <Link className='link' to={'/'}>  <h1><p id='P'>P</p>arti<p id='F'> F</p></h1> </Link>
        </div>
    )
}

export default NomeSiteStandart
