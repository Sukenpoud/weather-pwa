import React from 'react';
import Card from './Card';

const Cards = () => {

  const days = [
    {
      'day':'lundi',
      'temp':16,
      'wind':12
    },
    {
      'day':'mardi',
      'temp':16,
      'wind':12
    },
    {
      'day':'mercredi',
      'temp':16,
      'wind':12
    },
    {
      'day':'jeudi',
      'temp':16,
      'wind':12
    },
    {
      'day':'vendredi',
      'temp':16,
      'wind':12
    },
  ]

  return(  
    <div>
      {
      days.map((element,i) => {
          return <Card day={element.day} temp={element.temp} wind={element.wind}></Card>
        })
      }
    </div>
  )
}

export default Cards;