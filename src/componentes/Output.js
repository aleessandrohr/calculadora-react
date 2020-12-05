import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div>
                {this.props.number}
            </div>
        );
    }
}

export default Output;