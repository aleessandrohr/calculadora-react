import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    render() {

        let darkmode = {
            backgroundColor: this.props.dark ? 'rgb(20, 20, 20)' : 'rgb(230, 230, 230)',
            color: this.props.dark ? 'white' : 'black',
          }

        return (
            <div className='bt'>
                <button style={darkmode} className='operação' onClick={() => this.props.Set('AC')}>AC</button>
                <button style={darkmode} className='operação' onClick={() => this.props.Set('+/-')}>+/-</button>
                <button style={darkmode} className='operação' onClick={() => this.props.Set('%')}>%</button>
                <button className='dividir' onClick={() => this.props.Set('/')}>/</button>
                <br/>
                <button style={darkmode} className='number' onClick={() => this.props.Set('7')}>7</button>
                <button style={darkmode} className='number' onClick={() => this.props.Set('8')}>8</button>
                <button style={darkmode} className='number' onClick={() => this.props.Set('9')}>9</button>
                <button className='multiplicar' onClick={() => this.props.Set('*')}>*</button>
                <br/>
                <button style={darkmode} className='number' onClick={() => this.props.Set('4')}>4</button>
                <button style={darkmode} className='number' onClick={() => this.props.Set('5')}>5</button>
                <button style={darkmode} className='number' onClick={() => this.props.Set('6')}>6</button>
                <button className='subtrair' onClick={() => this.props.Set('-')}>-</button>
                <br/>
                <button style={darkmode} className='number' onClick={() => this.props.Set('1')}>1</button>
                <button style={darkmode} className='number' onClick={() => this.props.Set('2')}>2</button>
                <button style={darkmode} className='number' onClick={() => this.props.Set('3')}>3</button>
                <button className='somar' onClick={() => this.props.Set('+')}>+</button>
                <br/>
                <button style={darkmode} className='zero' onClick={() => this.props.Set('0')}>0</button>
                <button style={darkmode} className='operação' onClick={() => this.props.Set('.')}>.</button>
                <button className='resultado' onClick={() => this.props.Set('=')}>=</button>
            </div>
        );
    }
}

export default Buttons;