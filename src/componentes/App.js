import React, { Component } from 'react';
import Buttons from './Buttons';
import Output from './Output';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      first: '0',
      last: '0',
      total: null,
      operação: null,
      display: 0,
    }
  }

  Set = (value) => {
    if (this.state.display === null) {
      this.setState({display: '0'})
    }
    if (value >= 0 || value <= 9) {
      if (this.state.operação === null) {
        let valor = null
        let firststate = this.state.first
        if (this.state.first === '0') {
          valor = value
        }
        else {
          valor = firststate += value
        }
        this.setState({first: valor, display: valor})
      }
      else {
        let valor = null
        let laststate = this.state.last
        if (this.state.last === '0') {
          valor = value
        }
        else {
          valor = laststate += value
        }
        if (this.state.operação === '+') {
          this.setState({total: Number(this.state.first) + Number(valor)})
        }
        else if (this.state.operação === '-') {
          this.setState({total: Number(this.state.first) - Number(valor)})
        }
        else if (this.state.operação === '*') {
          this.setState({total: Number(this.state.first) * Number(valor)})
        }
        else if (this.state.operação === '/') {
          this.setState({total: Number(this.state.first) / Number(valor)})
        }
        this.setState({last: valor, display: valor})
      }
    }
    else {
      if (value === '=') {
        this.setState({first: this.state.total, last: '0', total: null, display: this.state.total})
      }
      else if (value === 'AC') {
        this.setState({first: '0', last: '0', total: null, operação: null, display: 0})
      }
      else if (value === '.' || value === '+/-' || value === '%') {
        alert('Função em desenvolvimento!')
      }
      else {
        if (this.state.last === '0') {
          this.setState({operação: value, display: value})
        } else {
          this.setState({first: this.state.total, last: '0', total: null, operação: value, display: value})
        }
      }
    }
  }

  render() {
    return(
      <div className='Calculadora'>
        <h1>Calculadora</h1>
        <div className='App'>
          <Output display={this.state.display}/>
          <Buttons Método={this.Set} display={this.state.display}/>
        </div>
      </div>
    )
  }
}

export default App;