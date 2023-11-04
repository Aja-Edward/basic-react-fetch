import React, { useState } from 'react'
import navImage from '../images/siga247.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimesCircle } from 'react-icons/fa'
import './Nav.css'

const Nav = () => {
  const [toggleShowLink, setToggleShowLink] = useState(false  )
  const [toggleburger, setToggleBurger] = useState(false)

  const handleToggleLink = () => {
    setToggleShowLink(!toggleShowLink)
  }

  return (
    <nav className='nav-container'>
      <div className='nav-logo-container'>
        <img src={navImage} alt='learning siga guita' />
        <div className='nav-log-text'> SIGA</div>
      </div>
      <div className='burgerlogo'>
        <GiHamburgerMenu className='bars' onClick={handleToggleLink} />
      </div>
      {toggleShowLink && (
        <ul className='nav-link'>
          <FaTimesCircle className='times' onClick={handleToggleLink} />
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Socials</li>
        </ul>
      )}
    </nav>
  )
}

export default Nav
