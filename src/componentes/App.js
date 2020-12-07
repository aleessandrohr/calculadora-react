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
    var número = this.state.num
    var totalnum = this.state.total
    var oper = this.state.operação
    if (value === 'AC') {
      this.setState({num: 0, total: 0, operação: null})
    }
    if (value >= 0 || value <= 9) {
      if (número === 0 || número === oper) {
        this.setState({num: null})
        this.setState({num: value, total: value})
      } else {
        this.setState({num: número += value, total: totalnum += value})
      }
      if (oper === '+') {
        this.setState({total: Number(totalnum) + Number(value), operação: null})
      } else if (oper === '-') {
        this.setState({total: Number(totalnum) - Number(value), operação: null})
      } else if (oper === '*') {
        this.setState({total: Number(totalnum) * Number(value), operação: null})
      } else if (oper === '/') {
        this.setState({total: Number(totalnum) / Number(value), operação: null})
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      this.setState({operação: value, num: value})
    } else if (value === '=') {
      this.setState({num: totalnum, operação: 'AC'})
    } else if (value === '+/-' || value === '%' || value === '.') {
      alert('Função em desenvolvimento.')
    }
  }

  render() {
    return(
      <div className='App'>
        <Output num={this.state.num}/>
        <Buttons Método={this.Set}/>
      </div>
    )
  }
}

export default App;
