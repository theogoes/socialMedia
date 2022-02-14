import React, {useState}from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import api from '../Services/api'
import UserIconStandart from './standarts/UserIconStandart'


function FeedCard({picture, usr, desc, likes, avatar, id, inter, userId}) {
    const [userID,getUserID] = useState(localStorage.getItem("FuserID"))

    async function interactLikePost(){
        try {
            
            await api.put('post/'+id+'/like', null, {
                headers: {
                    user_id: userID
                }
            })
            inter()
        } catch (error) {
            console.log("acho que não mazinho: "+error)
            
        }
    }

    return (
        <>
            <div className='card-container'>
                <div className='card-header'>
                    <UserIconStandart avatar={avatar}/>
                    <h3>{usr}</h3>
                </div>
                <div className='card-picture'>
                    <img src={picture}alt='post' />
                </div>
                <div className='card-footer'>
                    <div className='card-metadata'>
                        {likes.includes(userID)?<AiFillHeart id='like' onClick={interactLikePost}/>:
                        <AiOutlineHeart id='like' onClick={interactLikePost} />}
                        {likes.length > 0? 
                            likes.length === 1? <h3>{likes.length} pessoa curtiu</h3> 
                            : <h3>{likes.length} pessoas curtiram</h3>
                        :null}
                        
                    </div>
                    <div className='card-info'>
                        <p><a href={'/p/'+userId}>{usr}</a> {desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedCard
