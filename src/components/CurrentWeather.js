import React from 'react';

const CurrentWeather = ({data}) => {
  return(  
      <div id="current_weather" className="section">  
        {
          // Météo à l'instant T
          <div id="weather-now">
            <div className="title"><h2>Actuellement</h2></div>
            <div className='city'>{data.location.name}, {data.location.region}</div>
            <div className="temp_now">{data.current.temp_c}<span className="celsius"> °C</span></div>
            <div className="condition_now">{data.current.condition.text}</div>
          </div>
        }      
    </div>
  )
}

export default CurrentWeather;