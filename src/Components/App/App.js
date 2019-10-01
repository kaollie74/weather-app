import React, { Component } from 'react';
import './App.css';

// import components
import Titles from '../Titles/Titles';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Titles/>
      </div>
    );
  }
}

export default App;
