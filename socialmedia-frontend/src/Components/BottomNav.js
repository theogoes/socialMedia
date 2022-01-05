import React from 'react'
import {AiFillHome, AiOutlineSearch, AiFillPlusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function BottomNav() {
    return (
        <footer>
            <nav>
                <Link to={"/"}>
                     <AiOutlineSearch className='BottomIcon'/>
                </Link>
                <Link to={"/feed"}>
                    <AiFillHome className='BottomIcon'/>
                </Link>
                <Link to={"/post"}>
                    <AiFillPlusCircle className='BottomIcon'/>
                </Link>    
            </nav>
        </footer>
    )
}


