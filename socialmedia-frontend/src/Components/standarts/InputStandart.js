import React from 'react'

function InputStandart({id, placeholder, type}) {
    return (
        <div className='input-field'>
            <input id={id} type={type}  placeholder={placeholder} />
        </div>
    )
}

export default InputStandart
