import React, {Component} from 'react';

class Form extends Component {

  render (){
    return (
      <form>
        <input type='text' name='city' placeholder='city..'/>
        <input type='text' name='country' placeholder='Country...'/>
      </form>
    )
  }

}

export default Form;