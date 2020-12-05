import React, { Component } from 'react';
import Button from './Button';
import './ButtonCenter.css';

class ButtonCenter extends Component {

    Alterar = (number) =>{
        this.props.Evento(number)
    }

    render() {
        return (
            <div className='button'>
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'AC'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'+/-'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'%'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'dividir'}
                value={'/'}
                Alterar={this.Alterar}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'9'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'8'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'7'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'multiplicar'}
                value={'*'}
                Alterar={this.Alterar}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'6'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'5'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'4'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'subtrair'}
                value={'-'}
                Alterar={this.Alterar}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'3'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'2'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'1'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'somar'}
                value={'+'}
                Alterar={this.Alterar}
                />
                <br/>
                <Button
                classe={'bt'}
                classebt={'zero'}
                value={'0'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'number'}
                value={'.'}
                Alterar={this.Alterar}
                />
                <Button
                classe={'bt'}
                classebt={'resultado'}
                value={'='}
                Alterar={this.Alterar}
                />
            </div>
        );
    }
}

export default ButtonCenter;