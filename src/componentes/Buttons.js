import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    render() {
        return (
            <div className='bt'>
                <button className='operação' onClick={() => this.props.Set('AC')}>AC</button>
                <button className='operação' onClick={() => this.props.Set('+/-')}>+/-</button>
                <button className='operação' onClick={() => this.props.Set('%')}>%</button>
                <button className='dividir' onClick={() => this.props.Set('/')}>/</button>
                <br/>
                <button className='number' onClick={() => this.props.Set('7')}>7</button>
                <button className='number' onClick={() => this.props.Set('8')}>8</button>
                <button className='number' onClick={() => this.props.Set('9')}>9</button>
                <button className='multiplicar' onClick={() => this.props.Set('*')}>*</button>
                <br/>
                <button className='number' onClick={() => this.props.Set('4')}>4</button>
                <button className='number' onClick={() => this.props.Set('5')}>5</button>
                <button className='number' onClick={() => this.props.Set('6')}>6</button>
                <button className='subtrair' onClick={() => this.props.Set('-')}>-</button>
                <br/>
                <button className='number' onClick={() => this.props.Set('1')}>1</button>
                <button className='number' onClick={() => this.props.Set('2')}>2</button>
                <button className='number' onClick={() => this.props.Set('3')}>3</button>
                <button className='somar' onClick={() => this.props.Set('+')}>+</button>
                <br/>
                <button className='zero' onClick={() => this.props.Set('0')}>0</button>
                <button className='operação' onClick={() => this.props.Set('.')}>.</button>
                <button className='resultado' onClick={() => this.props.Set('=')}>=</button>
            </div>
        );
    }
}

export default Buttons;