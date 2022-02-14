import React from 'react';
import { BiMapAlt } from 'react-icons/bi'

function PostStep2({setPostStep}) {
  return (
    <>
    <BiMapAlt id='map' />
     <label>
       <h3>Local : </h3>
       <div className='input'>
         <div className="input-field">
           <input id='input' />
         </div>
       <button onClick={setPostStep(2)}> Next</button>
       </div>
     </label>
     </>
  );
}

export default PostStep2;
