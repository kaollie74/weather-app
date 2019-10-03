import React, { Component } from 'react';
import './App.css';

// import components
import Form from '../Form/Form';
import Titles from '../Titles/Titles';
import Weather from '../Weather/Weather';

//import api key from .env file
require('dotenv').config();
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;







class App extends Component {

  // initial state where all values are empty
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
    // set fetch to variable api_call
    // string interpolation with city and country that is passed in through props from Form component
    // 'units=Imperial' is to bring back the temperature as fahrenheight
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${items.city},${items.country}&APPID=${API_KEY}&units=Imperial`);

    // set format the api_call variable to json
    // and set to data variable
    const data = await api_call.json();
    console.log(data);

    // if checks to see if the input values are true
    // if true, set state to data values
    // if false, setState to empty values except
    // error which will be set to 'Please enter values'
    if (items.city && items.country) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temp: '',
        city: '',
        humidity: '',
        description: '',
        error: 'Please enter values'
      })
    }


  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title.container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">

                  <Form getWeather={this.getWeather} />
                  
                  <Weather
                    temperature={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>


    );
  }
}

export default App;
