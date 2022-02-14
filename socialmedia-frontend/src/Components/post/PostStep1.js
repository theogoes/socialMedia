import React, { useState } from 'react';

import {GiPartyPopper} from 'react-icons/gi'




function PostStep1({setPostStep}) {


  return (

    <>
     <GiPartyPopper id='map' />
      <label>
        <h3>Nome :  </h3>
        <div className='input'>
          <div className="input-field">
            <input id='input' />
          </div>
        <button onClick={setPostStep(1)}> Next</button>
        </div>
      </label>
      </>

  );
}

export default PostStep1;
