import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'


function FeedCard({picture, usr, desc, likes, avatar}) {
    return (
        <>
            <div className='card-container'>
                <div className='card-header'>
                    <img src={avatar} alt='Profile-icon' />
                    <h3>{usr}</h3>
                </div>
                <div className='card-picture'>
                    <img src={picture}alt='post' />
                </div>
                <div className='card-footer'>
                    <div className='card-metadata'>
                        <AiOutlineHeart id='like' />
                        {likes.length > 0? 
                            likes.length === 1? <h3>{likes.length} pessoa curtiu</h3> 
                            : <h3>{likes.length} pessoas curtiram</h3>
                        :null}
                        
                    </div>
                    <div className='card-info'>
                        <p><a href='/feed'>{usr}</a> {desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedCard
