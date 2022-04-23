import React from 'react'
import { Header } from '../components/Header'
import './Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      
      <Header/>
      <div className='login-container'>
        <h1>Login</h1>
        <form className='login-form'>
          <input type='text' placeholder='Username' autoFocus/>
          <input type='password' placeholder='Password'/>
          <button type='submit'>Login</button>
        </form>
        <Link to='/signin' className='login-link'>Dont have an account?</Link>
      </div>

    </div>
  )
}
