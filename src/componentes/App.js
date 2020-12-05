import React, { Component } from 'react';
import Buttons from './Buttons';
import Output from './Output';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      num: 0,
      total: 0,
      operação: null,
    }
  }

  Set = (value) => {
    let número = parseInt(this.state.num)
    let valortot = this.state.total
    if (value === 'AC') {
      this.setState({num: 0, total: 0, operação: null})
    }
    else if (value === '+') {
      this.setState({total: número + valortot, num: 0, operação: value})
    }
    else if (value === '-') {
      this.setState({total: número - valortot, num: 0, operação: value})
    } 
    else if (value === '*') {
      this.setState({total: número * valortot, num: 0, operação: value})
    } 
    else if (value === '/') {
      this.setState({total: número / valortot, num: 0, operação: value})
    }
    else if (value === '.' || value === '+/-' || value === '%') {
      alert('Função em desenvolvimento.')
    }
    else if (value === '=') {
      if (this.state.operação === '+')
      this.setState({total: número + valortot, num: 0, operação: null})
      else if (this.state.operação === '-')
      this.setState({total: número - valortot, num: 0, operação: null})
      else if (this.state.operação === '*')
      this.setState({total: número * valortot, num: 0, operação: null})
      else if (this.state.operação === '/')
      this.setState({total: número / valortot, num: 0, operação: null})
    }    
    else {
      if (número === 0) {
        this.setState({num: null})
        this.setState({num: value})
      }
      else {
        this.setState({num: número += value})
      }
    }
  }

  render() {
    return(
      <div className='App'>
        <Output num={this.state.num} total={this.state.total}/>
        <Buttons Método={this.Set}/>
      </div>
    )
  }
}

export default App;
