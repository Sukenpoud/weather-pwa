import { Carousel } from '@mantine/carousel';
import React from 'react';
import Card from './Card';
import ForecastTabs from './ForecastTabs';
import './ForecastWeather.css';

const ForecastWeather = ({data}) => {
  return(  
      <div id="forecast_weather" className="section">  
        <div className="title"><h2>Prévisions</h2></div>
        <Carousel slideSize="100%" slideGap="md" controlSize={52} draggable={false} align="start" controlsOffset="xs">
        {
          // Cards des 3 prochains jours
          data.forecast.forecastday.map(( element, i ) => {
            return (    
                <Carousel.Slide>
                  <Card
                    date={element.date} 
                    maxtemp={element.day.maxtemp_c} 
                    mintemp={element.day.mintemp_c} 
                    maxwind={element.day.maxwind_kph} 
                    condition={element.day.condition}
                    sunrise={element.astro.sunrise}
                    sunset={element.astro.sunset}
                    daily_will_it_rain={element.day.daily_will_it_rain}
                    avghumidity={element.day.avghumidity}
                    uv={element.day.uv}
                  ></Card>
                  <ForecastTabs forecastday={element}></ForecastTabs>
                </Carousel.Slide>
              )
          })
        }
        </Carousel>
    </div>
  )
}

export default ForecastWeather;