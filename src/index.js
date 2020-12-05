import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';

function Aviso() {
    alert('Aviso!!!\nCalculadora com possíveis bugs.\nCaso tenha algum, avise-me.')
}

ReactDOM.render(<App />, document.getElementById('root'));
Aviso()