import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Fedd from '../Pages/Fedd'

import Login from '../Pages/Login'
import Post from '../Pages/Post'
import Profile from '../Pages/Profile'
import Register from '../Pages/Register'

function Router() {

    const [userID, setUserID] = useState(localStorage.getItem('FuserID'))

    function updateUserID(user){
        setUserID(user)
    }
    function clearUserID(){
        setUserID(null)
    }

    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={userID?<Navigate to="/feed"/>:<Login updateUserID = {updateUserID}/> }/>  
                <Route exact path="/feed" element={userID?<Fedd clearUserID={clearUserID}/> : <Navigate to="/"/>}/>
                <Route exact path="/post" element={<Post/>}/>
                <Route exact path="/register" element={!userID?<Register updateUserID = {updateUserID}/>: <Navigate to="/"/>}/>
                <Route exact path="/p/:id" element={userID?<Profile/>: <Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
