import React from 'react'
import { Header } from '../components/Header'
import './SignIn.css'
import './Login.css'
import { Link } from 'react-router-dom'

export const SignIn = () => {
  return (
    <div>
      <Header/>
      <div className='login-container'>
        <h1>Sign in</h1>
        <form className='sign-in-form'>
          <input type='text' placeholder='Username' autoFocus/>
          <input type='password' placeholder='Password'/>
          <input type='password' placeholder='Confirm Password'/>
          <button type='submit'>Sign in</button>
        </form>
        <Link to='/login' className='login-link'>i've an account - Login</Link>
      </div>    
    </div>
  )
}
