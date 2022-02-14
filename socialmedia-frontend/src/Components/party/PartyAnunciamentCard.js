import React from 'react'

function PartyAnunciamentCard({picture}) {
  return (
    <div className='anunciament_card'>
    <img src={picture} alt='card_image'/>
    </div>
  )
}

export default PartyAnunciamentCard