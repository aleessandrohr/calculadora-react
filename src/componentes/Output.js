import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
    render() {
        return (
            <div className='principal'>
                <div className='num'>
                   {this.props.num} 
                </div>
            </div>
        );
    }
}

export default Output;