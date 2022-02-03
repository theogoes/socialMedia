import React from 'react';

function ProfileFeedCard({picture}) {
  return (
    <>
    <div className='profile_card'>
        <img src={picture} alt='card_image'/>
    </div>
    </>
    );
}

export default ProfileFeedCard;
