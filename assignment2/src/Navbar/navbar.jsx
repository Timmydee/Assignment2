import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Home from '../Home/home'

const Navbar = () => {
  return (
    <>
      <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/nexted'> Nexted</Link></li>
            <li><Link to='/user'>Hall of Fame</Link></li>
          </ul>
      </nav>

      

    </>
  )
}

export default Navbar