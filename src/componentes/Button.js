import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return(
            <div className={this.props.classe}>
                <div>
                   <button>{this.props.number}</button>
                </div>
            </div>
        )
    }
}

export default Button;