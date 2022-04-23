import React from 'react'
import { CardsContainer } from '../components/CardsContainer'
import { Header } from '../components/Header'
import './Homepage.css';

export const Homepage = () => {
  return (
    <div>
      <Header/>
      <CardsContainer/>
    </div>
  )
}
