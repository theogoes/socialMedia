import React from 'react';

function profileHeader({userName, userComent, followers, avatar }){
  return (
    <div className='profile_header'>
        <img src={''+avatar+''} alt='prifile_icon'/>
        <div className='profile_info'>
            <h2 id='username'>{userName}</h2>
            <h2 id='User_comment'>{userComent}</h2>
            <div className='follow'>
                <div className='seguindo'>
                    <h4>{followers} seguindo</h4>
                </div>
                <div className='seguindo'>
                    <h4></h4>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default profileHeader;
