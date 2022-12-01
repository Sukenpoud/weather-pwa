import { Button } from '@mantine/core';
import React from 'react';
import Card from './Card';
import './Cards.css';

const Cards = () => {

  function getWeatherByLoc(location) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0b7ee1c681msh1641e4e76ade1c7p1efcf3jsn922a58cf2954',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+location+'&days=3', options)
      .then(response => {
        response.json()
        .then(json => console.log(json))
      })
      .catch(err => console.error(err));
  }

  

  const mockdata = [
    {
      'day':'lundi',
      'temp':16,
      'wind':12,
      'description':'Nuageux'
    },
    {
      'day':'mardi',
      'temp':16,
      'wind':12,
      'description':'Nuageux'
    },
    {
      'day':'mercredi',
      'temp':16,
      'wind':12,
      'description':'Nuageux'
    },
    {
      'day':'jeudi',
      'temp':16,
      'wind':12,
      'description':'Nuageux'
    },
    {
      'day':'vendredi',
      'temp':16,
      'wind':12,
      'description':'Sunny'
    },
  ]

  return(  
    <div id="cards-week">
      <Button onClick={() => getWeatherByLoc('Nantes')}>QUEL TEMPS A NANTES ?</Button>
      {
      mockdata.map((element,i) => {
          return <Card day={element.day} temp={element.temp} wind={element.wind} description={element.description}></Card>
        })
      }
    </div>
  )
}

export default Cards;