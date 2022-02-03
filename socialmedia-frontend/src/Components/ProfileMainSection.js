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

    const [userPosts, setPosts] = useState([])
    const [useLikes, setUserLikes] = useState([])

    useEffect(()=>{
        async function getProfile(){
            try {
                const resp = await api.get("/users/"+id)
                const {data} = resp
                setUserName(data.userInfo.userName)
                setEmail(data.userInfo.email)
                setFollowers(data.userInfo.followers.length)
                setAvatar(data.userInfo.avatar)
                setPosts(data.postUser)
                console.log(data.userInfo.likes)
            } catch (error) {
                alert("deu ruim padrim : " + error)
            }
        }
        getProfile()
    },[])
    
    return (
        <>

           {Username === null? null:
            <main className='profile_container'>
                <ProfileHeader 
                userName = {Username}
                userComent = {email}
                followers = {followers}
                avatar = {avatar}
                />
                <ProfileFeed
                posts={userPosts}
                />
   
                   
            </main>}
        </>
    )
}

export default ProfileMainSection
