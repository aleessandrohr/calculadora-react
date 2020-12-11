import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render() {
        
        return(
            <div className={this.props.classe}>
                <div>
                   <button className={this.props.tipo} onClick={() => this.props.Set(this.props.value)}>{this.props.value}</button>
                </div>
            </div>
        )
    }
}

export default Button;