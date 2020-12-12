import React, { Component } from 'react';
import Output from './Output';
import Buttons from './Buttons';
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      first: null,
      last: null,
      total: null,
      operação: null,
      display: 0,
    }
  }

  render() {
    return (
      <div className='body'>
        <div className='App'>
          <Output display={this.state.display}/>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;