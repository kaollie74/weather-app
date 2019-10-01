import React, { Component } from 'react';
import './App.css';
require('dotenv').config();
const WEATHER_API_KEY= process.env.WEATHER_API_KEY;



// import components
import Form from '../Form/Form';
import Titles from '../Titles/Titles';
import Weather from '../Weather/Weather';


class App extends Component {

  componentDidMount () {
    this.getWeather();
  }
  
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${WEATHER_API_KEY}
    `);

    const data = await api_call.json();
    console.log(data);

  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;
