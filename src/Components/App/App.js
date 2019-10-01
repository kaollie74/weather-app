import React, { Component } from 'react';
import './App.css';
// import components
import Form from '../Form/Form';
import Titles from '../Titles/Titles';
import Weather from '../Weather/Weather';

//import api key
require('dotenv').config();
const WEATHER_API_KEY= process.env.WEATHER_API_KEY;







class App extends Component {

 state = {
    temp: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
 }
  
  getWeather = async (items) => {

  
    console.log('in get weather', items)

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q='${items.city},${items.country}'&APPID=${WEATHER_API_KEY}
    `);

    const data = await api_call.json();
    console.log(data);

    this.setState ({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    })

  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Titles/>
        <Form getWeather= {this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

export default App;
