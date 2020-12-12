import React, { Component } from 'react';
import Output from './Output';
import Buttons from './Buttons';
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      first: '0',
      last: '0',
      total: null,
      operação: null,
      display: 0,
      darkMode: false,
    }
  }

  setTema = (tema) => {
    this.setState({darkMode: tema})
  }

  Set = (value) => {
    if (value >= 0 || value <= 9) {
      if (this.state.operação === null) {
        let valor = null
        if (this.state.first === '0') {
          valor = value
        }
        else {
          let firststate = this.state.first
          valor = firststate += value
        }
        this.setState({first: valor, display: valor})
      }
      else {
        let valor = null
        if (this.state.last === '0') {
          valor = value
        }
        else {
          let laststate = this.state.last
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
        this.setState({last: valor, display: `${this.state.first} ${this.state.operação} ${valor}`})
      }
    }
    else {
      if (value === '=') {
        if (this.state.total !== null) {
          this.setState({first: this.state.total, last: '0', display: this.state.total, operação: null})
        }
      }
      else if (value === 'AC') {
        this.setState({first: '0', last: '0', total: null, operação: null, display: 0})
      }
      else if (value === '.' ) {
        if (this.state.operação === null) {
          if (this.state.first.includes(value) === false) {
            let valor = null
            let firststate = this.state.first
            valor = firststate += value
            this.setState({first: valor, display: valor})
          }
        }
        else {
          if (this.state.last.includes(value) === false) {
            let valor = null
            let laststate = this.state.last
            valor = laststate += value
            this.setState({last: valor, display: `${this.state.first} ${this.state.operação} ${valor}`})
          }
        }
      }
      else if (value === '+/-' || value === '%') {
        alert('Função em desenvolvimento!')
      }
      else {
        if (this.state.last === '0') {
          this.setState({operação: value, display: `${this.state.first} ${value}`})
        } else {
          this.setState({first: this.state.total, last: '0', operação: value, display: `${this.state.total} ${value}`})
        }
      }
    }
  }

  render() {

    let darkmodeBody = {
      backgroundColor: this.state.darkMode ? 'black' : 'white',
    }

    let darkmode = {
      backgroundColor: this.state.darkMode ? 'rgb(17, 17, 17)' : 'rgb(238, 238, 238)',
      color: this.state.darkMode ? 'white' : 'black',
    }

    if (this.state.darkMode === false) {
      return (
        <div className='body'>
          <div style={darkmode} className='App'>
            <i className="fas fa-moon" style={darkmode} id='tema' onClick={() => this.setTema(true)}></i>
            <Output display={this.state.display} dark={darkmode}/>
            <Buttons Set={this.Set}/>
          </div>
        </div>
      ); 
    }
    else {
      return (
        <div style={darkmodeBody} className='body'>
          <div style={darkmode} className='App'>
            <i className="fas fa-moon" style={darkmode} id='tema' onClick={() => this.setTema(false)}></i>
            <Output display={this.state.display} dark={darkmode}/>
            <Buttons Set={this.Set} dark={this.state.darkMode}/>
          </div>
        </div>
      ); 
    }
  }
}

export default App;