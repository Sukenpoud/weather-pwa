import { Button, Box, TextInput } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconSearch } from '@tabler/icons';
import React from 'react';
import Card from './Card';
import './Cards.css';
import { useState, useEffect } from "react";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_WEATHERAPI_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const Cards = () => {
  const [ city, setCity ] = useState('Nantes');
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const fetchWeatherApi = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+city+'&days=3', options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      console.log(actualData);
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const handleSubmit = (event) => {
    // Requête API au submit de la recherche
    event.preventDefault();
    let cityupdate=document.getElementById("city").value;
    fetchWeatherApi(cityupdate);
  };

  useEffect(() => {
    // Requête API à l'initialisation de la page
    fetchWeatherApi(city);
  }, []);

  return(  
      <div id="forecast">  
      <Box sx={{ maxWidth: 400 }} mx="auto">
        <form >
          <TextInput
              placeholder="Rechercher ma ville"
              size="sm"
              icon={<IconSearch size={12} stroke={1.5} />}
              name="city"
              id="city"
          />
          <Button type="submit" onClick={handleSubmit}>
            Rechercher
          </Button>
        </form>
      </Box>      
        {
          // Chargement en attendant les résultats de l'API
          loading && <div>Chargement des résulats...</div>
        }
        {
          // Message si erreur de l'API
          error && (
            <div>{`There is a problem fetching the weather data - ${error}`}</div>
          )
        }
        {
          // Nom de la ville quand chargement terminé
          data &&
          <div className='city'>{data.location.name}, {data.location.region}</div>
        }      
        {
          // Météo à l'instant T
          data &&
          <div id="weather-now" class="section">
            <div class="title"><h2>Actuellement</h2></div>
            <div class="temp_now">{data.current.temp_c}<span class="celsius"> °C</span></div>
            <div class="condition_now">{data.current.condition.text}</div>
          </div>
        }
        <div id="cards-week" class="section">
          <div class="title"><h2>Prévisions</h2></div>
          <Carousel slideSize="70%" height={200} slideGap="md">
          {
            // Cards des 3 prochains jours quand chargement terminé
            data &&
            data.forecast.forecastday.map(( element, i ) => {
              return (    
                  <Carousel.Slide>
                    <Card
                      date={element.date} 
                      maxtemp={element.day.maxtemp_c} 
                      mintemp={element.day.mintemp_c} 
                      maxwind={element.day.maxwind_kph} 
                      condition={element.day.condition}
                    ></Card>
                  </Carousel.Slide>
                
                )
            })
          }
          </Carousel>
        </div>
        
    </div>
  )
}

export default Cards;