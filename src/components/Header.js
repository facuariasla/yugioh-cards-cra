import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header-comp'>

      <NavLink to='/'>
        <nav className='header-logo'></nav>
      </NavLink>

      <div className='header-navbar'>
        <NavLink to='/login' className={({ isActive })=> isActive? 'active': '' }>
          <nav>Login</nav>
        </NavLink>
        <NavLink to='/signin'>
          <nav>SignIn</nav>
        </NavLink>
        <NavLink to='/info'>
          <nav>Info</nav>
        </NavLink>
      </div>

    </header>
  )
}
