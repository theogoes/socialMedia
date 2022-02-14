import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../Services/api'


import ProfileFeed from './profile/ProfileFeed'
import ProfileHeader from './profile/ProfileHeader'

function ProfileMainSection() {
    const {id} = useParams()
    
    const [Username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [followers,setFollowers] = useState("")
    const [avatar,setAvatar] = useState("")
    const [userFollow, setFollow] = useState(false)

    const [userPosts, setPosts] = useState([])
    const [useLikes, setUserLikes] = useState([])

    async function isFollow(){
        setFollow(!userFollow)
    }

    useEffect(()=>{
        async function getProfile(){
            try {
                const resp = await api.get("/users/"+id)
                const {data} = resp
                setUserName(data.userInfo.userName)
                setEmail(data.userInfo.email)
                setFollowers(data.userInfo.followers)
                setAvatar(data.userInfo.avatar)
                setPosts(data.postUser)
                setUserLikes(data.userInfo.likes)
            } catch (error) {
               
            }
        }
        getProfile()
    },[userFollow])
    
    return (
        <>

           {Username === null? null:
            <main className='profile_container'>
                <ProfileHeader 
                userName = {Username}
                userComent = {email}
                followers = {followers}
                avatar = {avatar}
                follow = {isFollow}
                perfilUserId = {id}
                />
                <ProfileFeed
                posts = {userPosts}
                likes = {useLikes}
                />
   
                   
            </main>}
        </>
    )
}

export default ProfileMainSection
