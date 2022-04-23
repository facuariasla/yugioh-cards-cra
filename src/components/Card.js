import React, { useEffect, useState } from 'react'
import './Card.css'

export const Card = ({ cardData }) => {

  return (
    <div className='card-component'>
      <p className='card-component-title'>{cardData.name}</p>
      <img src={cardData.card_images[0].image_url}/>
      <div className='img__description'>
        <p>Type: {cardData.type}</p>
        <hr/>
        {cardData.desc}

      </div>
    </div>
  )


}


