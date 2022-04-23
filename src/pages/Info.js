import React from 'react'
import { Header } from '../components/Header'
import './Info.css'

export const Info = () => {
  return (
    <div>
      <Header/>
      <div className='info-container' style={{textAlign: 'center'}}>
        <h1>Info</h1>
        <article className='info-article'>
          <p>
            Data from Yu-Gi-Oh! API by YGOPROdeck
          </p>
          <a href='https://db.ygoprodeck.com/api-guide/' target='_blank' rel="noreferrer"> 
            https://db.ygoprodeck.com/api-guide/
          </a>

          <nav className='header-logo-info'>
          </nav>
          <p>
            Facundo Arias
          </p>
        </article>
      </div>
    </div>
  )
}
