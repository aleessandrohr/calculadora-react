import React, { Component } from 'react';
import Button from './Button';
import './ButtonCenter.css';

class ButtonCenter extends Component {
    render() {
        return (
            <div className='button'>
                <Button
                classe={'number'}
                number={9}
                />
                <Button
                classe={'number'}
                number={8}
                />
                <Button
                classe={'number'}
                number={7}
                />
                <br/>
                <Button
                classe={'number'}
                number={6}
                />
                <Button
                classe={'number'}
                number={5}
                />
                <Button
                classe={'number'}
                number={4}
                />
                <br/>
                <Button
                classe={'number'}
                number={3}
                />
                <Button
                classe={'number'}
                number={2}
                />
                <Button
                classe={'number'}
                number={1}
                />
                <br/>
                <Button
                classe={'number'}
                number={0}
                />
            </div>
        );
    }
}

export default ButtonCenter;