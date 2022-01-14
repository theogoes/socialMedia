import React from 'react'

function InputStandart({id, placeholder, type, onChange}) {
    return (
        <div className='input-field'>
            <input id={id} type={type}  placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default InputStandart
