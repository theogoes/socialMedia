import React, { useState } from 'react';
import PostStep1 from './PostStep1';
import PostStep2 from './PostStep2';
import PostStep3 from './PostStep3';

function PostMainSection() {

  const [step, setStep] = useState(0)

  const setPostStep = (chosen) => () => {
    setStep(chosen)
    console.log(chosen)
  }

  return (
  <>
    <main>
      <div className='post_container'>
        {step === 0 ?
        <PostStep1 setPostStep={setPostStep}/>
        :null
        }
        {step === 1 ?
        <PostStep2 setPostStep={setPostStep}/>
        :null
        }
        {step === 2 ?
        <PostStep3 setPostStep={setPostStep}/>
        :null
        }
      </div>    
    </main>    
  </>);
}

export default PostMainSection;
