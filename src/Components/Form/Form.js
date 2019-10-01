import React, {Component} from 'react';

class Form extends Component {
  
  state = {
    city: '',
    country: ''
  }

  handlChange = (event, propsName) => {
    this.setState({
      [propsName]: event.target.value
    })
  }

  submitWeather = () => {
    this.props.getWeather(this.state);

    this.setState({
      city: '',
      country: ''
    })
  }

  render (){

    console.log('This is State', this.state)

    return (
      <div>
        <input type='text' value={this.state.city} name='city' placeholder='city..' onChange= {(event) => this.handlChange(event, 'city')}/>
        <input type='text' value={this.state.country} name='country' placeholder='Country...' onChange= {(event) => this.handlChange(event, 'country')} />
        <button onClick= {() => this.submitWeather()}>Get Weather</button>

      </div>
    )
  }

}

export default Form;