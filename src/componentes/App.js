import React, { Component } from 'react';
import ButtonCenter from './ButtonCenter';
import Output from './Output';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      number: ''
    }
  }

  setNum = (number) => {
    this.setState({number: this.state.number += number})
  }

  render() {
    return(
      <div className='background'>
        <Output number={this.state.number}/>
        <ButtonCenter Evento={this.setNum}/>
      </div>
    )
  }
}

export default App;
