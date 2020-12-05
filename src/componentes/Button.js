import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render() {
        
        return(
            <div className={this.props.classe}>
                <div>
                   <button className={this.props.classebt} onClick={() => this.props.Alterar(this.props.value)}>{this.props.value}</button>
                </div>
            </div>
        )
    }
}

export default Button;