import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
    render() {
        return (
            <div className='principal'>
                <div className='num'>
                   {this.props.num} 
                </div>
                <br/>
                <div className='total'>
                    {this.props.total}
                </div> 
            </div>
        );
    }
}

export default Output;