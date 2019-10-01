import React, { Component } from 'react';
import './App.css';

// import components
import Form from '../Form/Form';
import Titles from '../Titles/Titles';
import Weather from '../Weather/Weather';

class App extends Component {
  
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
