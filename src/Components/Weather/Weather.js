import React, { Component } from 'react';

// Stateless functional Component
const Weather = props => (

  <div className="weather__info">

    {
      props.city && props.city ?
        <p className="weather-key">
          <span className="weather__value"> Location: {props.city}, {props.country}</span>
        </p> : ''
    }

    {
      props.temperature ?
        <p className="weather-key">
          <span className="weather__value"> Temp: {props.temperature}</span>
        </p> : ''
    }
    {
      props.humidity ?
        <p className="weather-key">
          <span className="weather__value">Humidity: {props.humidity}</span>
        </p>
        :
        ''
    }
    {
      props.description ?
        <p className="weather-key">
          <span className="weather__value">  Conditions: {props.description}</span>
        </p> : ''
    }
    {
      props.error ?
        <p className="weather-key">
        <span className="weather__error"> {props.error}</span>
        </p>
        : ''
    }



  </div>
)

export default Weather;