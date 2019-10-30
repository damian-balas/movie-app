import React from 'react'
import { Link } from 'react-router-dom'

import './Header.sass'

const Header = () => (
  <header className='header'>
    <Link className='logo' to='/'>Movie App</Link>
    <Link className='link' to='/favs'>
      <span aria-label="Favourites page" className='fas fa-heart'></span>
    </Link>
  </header>
)

export default Header