import React, {useState} from 'react';
import ProfileFeedCard from './ProfileFeedCard';

function ProfileFeed({posts, likes, follow}) {

    const [opt, setOpt] = useState(0);

    const setProfileOption = (chose) =>()=>{
        setOpt(chose)
    }


  return (
    <div className='profile_feed'>
        <div className='mainSection_opt'>
            { opt === 0 ?
            <div className='selected'>
                <h3 >post</h3>
            </div>
            :
            <div className='profile_opt' onClick={setProfileOption(0)}>
                <h3 >post</h3>
            </div>
            }
            { opt === 1 ?
            <div className='selected'>
                <h3 >Likes</h3>
            </div>
            :
            <div className='profile_opt' onClick={setProfileOption(1)}>
                <h3 >Likes</h3>
            </div>
            }
            { opt === 2 ?
            <div className='selected'>
                <h3 >Eu fui</h3>
            </div>
            :
            <div className='profile_opt' onClick={setProfileOption(2)}>
                <h3 >Eu fui</h3>
            </div>
            }
        </div>
        <div className='profile_content'>

            {opt === 0 ?<div className='profile_post'>
                {posts === null? null :
                posts.map(post =>(
                    <ProfileFeedCard key={post._id}
                    picture = {post.picture}
                    /> 
                ))   
                }
                  
            </div>:null}
            {opt === 1?<div className='profile_post'>
            {likes === null? null :
                likes.map(post =>(
                    <ProfileFeedCard key={post._id}
                    picture = {post.picture}
                    follow = {follow}
                    /> 
                ))   
                }
            </div>:null}
            {opt === 2?<div className='profile_post'>
                <h3>Teste 3 </h3>
                <h3>Teste 3 </h3>
                <h3>Teste 3 </h3>
                <h3>Teste 3 </h3>
            </div>:null}
        </div>
    </div>
  );
}

export default ProfileFeed;
