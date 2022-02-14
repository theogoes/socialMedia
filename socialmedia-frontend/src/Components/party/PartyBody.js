import React, { useState } from 'react';
import ProfileFeedCard from '../profile/ProfileFeedCard';
import PartyAnunciamentCard from './PartyAnunciamentCard';

function PartyBody() {

  const [opt, setOpt] = useState(0)

  const setPartyOption = (chosen) =>()=>{
    setOpt(chosen)
  }


  return (
    <>
    <div className='profile_container'>
      <div className='profile_feed'>
        <div className='mainSection_opt'>
        { opt === 0 ?
            <div className='selected'>
                <h3 >Informações</h3>
            </div>
            :
            <div className='profile_opt' onClick={setPartyOption(0)}>
                <h3 >Informações</h3>
            </div>
            }
            { opt === 1 ?
            <div className='selected'>
                <h3 >Destaque</h3>
            </div>
            :
            <div className='profile_opt' onClick={setPartyOption(1)}>
                <h3 >Destaque</h3>
            </div>
            }
            { opt === 2 ?
            <div className='selected'>
                <h3 >Convidados</h3>
            </div>
            :
            <div className='profile_opt' onClick={setPartyOption(2)}>
                <h3 >Convidados</h3>
            </div>
            }
        </div>
        <div className='profile_content'>

          {opt === 0 ?<div className='party_content'>
          <PartyAnunciamentCard picture = {'https://publlique.s3.amazonaws.com/media/images/Festa-estudante-2019-blogCapoeiras.width-800.jpg'}/>
          </div>:null}
          {opt === 1 ?<div className='profile_post'>
            <ProfileFeedCard picture = {'https://publlique.s3.amazonaws.com/media/images/Festa-estudante-2019-blogCapoeiras.width-800.jpg'}/>
          </div>:null}
          {opt === 2 ?<div className='profile_post'>
            <ProfileFeedCard picture = {'https://publlique.s3.amazonaws.com/media/images/Festa-estudante-2019-blogCapoeiras.width-800.jpg'}/>
          </div>:null}
        </div>
      </div>
    </div>
    </>
  );
}

export default PartyBody;
