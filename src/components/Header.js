import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header-comp'>
      <nav className='header-logo'></nav>

      <div className='header-navbar'>
        <nav>Login</nav>
        <nav>Register</nav>
        <nav>Info</nav>
      </div>

    </header>
  )
}
