import React, { Component } from 'react';
import Buttons from './Buttons';
import Output from './Output';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      display: 0,
      first: null,
      last: null,
      operação: null,
    }
  }

  Set = (value) => {
    if (value >= 0 || value <= 9) {
      if (this.state.operação === null) {
        let valor = null
        let firststate = this.state.first
        if (this.state.first === null) {
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
        if (this.state.last === null) {
          valor = value
        }
        else {
          valor = laststate += value
        }
        this.setState({last: valor, display: valor})
      }
    }
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      this.setState({operação: value, display: value})
    }
    else if (value === '=') {
      this.Resultado()
    } 
    else if (value === 'AC') {
      this.AC()
    }
    else if (value === '.') {
      if (this.state.last == null) {
        let firststate = this.state.first
        let valor = firststate += '.'
        this.setState({first: valor, display: valor})
      } else {
        let laststate = this.state.last
        let valor = laststate += '.'
        this.setState({last: valor, display: valor})
      }
    }
    else if (value === '+/-' || value === '%') {
      alert('Função em desenvolvimento.')
    }
  }

  Resultado = () => {
    if (this.state.first !== null) {
      if (this.state.operação === '+') {
      this.Somar()
      }
      else if (this.state.operação === '-') {
        this.Subtrair()
      }
      else if (this.state.operação === '*') {
        this.Multiplicar()
      }
      else if (this.state.operação === '/') {
        this.Dividir()
      }
    }
    else {
      if (this.state.operação === '+' || this.state.operação === '-') {
        this.setState({display: this.state.last, first: this.state.last, last: null, operação: null})
      } else {
        this.AC()
      }
    }
  }

  AC = () => {
    this.setState({display: 0, first: null, last: null, operação: null})
  }

  Somar = () => {
    let total = Number(parseFloat(this.state.first)) + Number(parseFloat(this.state.last))
    this.setState({first: total, last: null, display: total})
  }

  Subtrair = () => {
    let total = Number(parseFloat(this.state.first)) - Number(parseFloat(this.state.last))
    this.setState({first: total, last: null, display: total})
  }

  Multiplicar = () => {
    let total = Number(parseFloat(this.state.first)) * Number(parseFloat(this.state.last))
    this.setState({first: total, last: null, display: total})
  }

  Dividir = () => {
    let total = Number(parseFloat(this.state.first)) / Number(parseFloat(this.state.last))
    this.setState({first: total, last: null, display: total})
  }

  render() {
    return(
      <div className='App'>
        <Output display={this.state.display}/>
        <Buttons Método={this.Set}/>
      </div>
    )
  }
}

export default App;