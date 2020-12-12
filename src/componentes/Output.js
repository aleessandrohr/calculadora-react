import React, { Component } from 'react';
import './Output.css'

class Output extends Component {
    render() {
        return (
            <div className='output'>
                <input type="text" style={this.props.dark} readOnly value={this.props.display}/>
            </div>
        );
    }
}

export default Output;