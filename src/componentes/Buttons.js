import React, { Component } from 'react';
import Button from './Button';
import './Buttons.css'

class Buttons extends Component {

    Set = (value) => {
        this.props.Set(value)
    }
    
    render() {
        return (
            <div className='Buttons'>
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'AC'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'+/-'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'%'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'dividir'}
                value={'/'}
                Set={this.Set}
                />
                <br/>
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'7'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'8'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'9'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'multiplicar'}
                value={'*'}
                Set={this.Set}
                />
                <br/>
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'4'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'5'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'6'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'subtrair'}
                value={'-'}
                Set={this.Set}
                />
                <br/>
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'1'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'2'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'3'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'somar'}
                value={'+'}
                Set={this.Set}
                />
                <br/>
                <Button
                classe={'bt'}
                tipo={'zero'}
                value={'0'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'number'}
                value={'.'}
                Set={this.Set}
                />
                <Button
                classe={'bt'}
                tipo={'resultado'}
                value={'='}
                Set={this.Set}
                />
            </div>
        );
    }
}

export default Buttons;