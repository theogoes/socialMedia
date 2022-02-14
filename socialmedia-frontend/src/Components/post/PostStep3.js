import React from 'react';
import { FaCommentDollar } from 'react-icons/fa'
import CurrencyInput from 'react-currency-masked-input';

function PostStep3({ setPostStep }) {
    return (
        <>
            <FaCommentDollar id='map' />
            <label>
                <h3>Valor : </h3>
                <div className='currency_field'>
                    <div className='currency_input_field'>
                        <p>R$</p>
                        <div className='currency_input'>
                            <CurrencyInput id="currency" />
                        </div>
                    </div>
                    <button onClick={setPostStep(0)}> Next</button>
                </div>
            </label>
        </>
    );
}

export default PostStep3;
