import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Fedd from '../Pages/Fedd'

import Login from '../Pages/Login'
import Post from '../Pages/Post'
import Profile from '../Pages/Profile'
import Register from '../Pages/Register'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/feed" element={<Fedd/>}/>
                <Route exact path="/post" element={<Post/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
