import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../assets/logo.png'
const Header = () => {
    return (

        <div className="header">
            <div className="headerLeft">
                <Link to='/'>
                
              <img src={logo} alt="" />
                </Link>
            </div>
            <div className="headerRight">

                <Link  className='headerLinks' to='/Zstories'>Z Stories</Link>
                <Link className='headerLinks' to='/Zudio'>#Zudio</Link>
                <Link className='headerLinks' to='/ZudioNearYou'>Zudio Near You</Link>
                <Link className='headerLinks' to='/Zworld'>Z World</Link>
            </div>

        </div>
    )
}

export default Header