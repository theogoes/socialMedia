import React, { useState } from 'react';
import api from '../../Services/api';
import UserIconStandart from '../standarts/UserIconStandart';

function ProfileHeader({userName, userComent, followers, avatar, follow, perfilUserId }){
    
    const [userID,getUserID] = useState(localStorage.getItem("FuserID"))
    
    async function gonaFollow(){
        try {
           const resp =  await api.put("/users/"+perfilUserId, null, {
                headers : {
                    user: userID
                }
            })
            console.log(resp);
            follow()
        } catch (error) {
            console.log(error);
        }   
    }
  
    return (
    <div className='profile_header'>
        <div className='image_place'>
            <UserIconStandart avatar={avatar}/>
            {followers.includes(userID)?
                <div className='h3border' id='seguindo' onClick={gonaFollow}><h3>Seguindo</h3></div>
                :
                <div className='h3border' onClick={gonaFollow}><h3>Seguir</h3></div>
            }
        </div>
        <div className='profile_info'>
            <h2 id='username'>{userName}</h2>
            <h2 id='User_comment'>{userComent}</h2>
            <div className='follow'>
                <div className='seguindo'>
                    <h4>{followers.length} seguindo</h4>
                </div>
                <div className='seguindo'>
                    <h4></h4>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default ProfileHeader;
