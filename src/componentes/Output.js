import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
    render() {
        return (
            <div>
                <div className='display'>
                    <input type="text" readOnly value={this.props.display}/>
                    <input type="text" readOnly value={this.props.displaytotal}/>
                </div>
            </div>
        );
    }
}

export default Output;