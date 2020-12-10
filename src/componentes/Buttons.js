import React, { Component } from 'react';
import Button from './Button';
import './Buttons.css'

class Buttons extends Component {

    Método = (value) => {
        this.props.Método(value)
    }

    render() {
        return (
            <div className='Buttons'>
                <Button
                classe={'bt'}
                classebt={'number'}
                Método={this.Método}
                value={'AC'}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'+/-'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'%'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'dividir'}
                value={'/'}
                Método={this.Método}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'9'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'8'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'7'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'multiplicar'}
                value={'*'}
                Método={this.Método}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'6'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'5'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'4'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'subtrair'}
                value={'-'}
                Método={this.Método}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'3'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'2'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'1'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'somar'}
                value={'+'}
                Método={this.Método}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'zero'}
                value={'0'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'.'}
                Método={this.Método}
                />
                <Button
                classe={'bt'}
                classebt={'resultado'}
                value={'='}
                Método={this.Método}
                />
            </div>
        );
    }
}

export default Buttons;