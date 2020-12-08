import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
    render() {
        return (
            <div>
                <div className='display'>
                   {this.props.display} 
                </div>
            </div>
        );
    }
}

export default Output;