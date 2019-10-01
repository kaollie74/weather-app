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

  render (){

    console.log('This is State', this.state)

    return (
      <div>
        <input type='text' name='city' placeholder='city..' onChange= {(event) => this.handlChange(event, 'city')}/>
        <input type='text' name='country' placeholder='Country...' onChange= {(event) => this.handlChange(event, 'country')} />
        <button onClick= {() => this.props.getWeather(this.state)}>Get Weather</button>

      </div>
    )
  }

}

export default Form;