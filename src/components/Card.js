import React from 'react';

const Card = ({day, wind, temp}) => {
  return(  
    <div>
        <h2>{day}</h2>
        <div className='temp'>{temp} °C</div>
        <div className='wind'>{wind} km/h</div>
    </div>
  )
}

export default Card;