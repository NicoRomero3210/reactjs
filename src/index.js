import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Esto sirve para que, aunque se vaya la internet, se pueda seguir laburando con la app
//Mirar las progresive web app
import * as serviceWorker from './serviceWorker';

//Aca le digo que renderice App.js en el elemento root del archivo index.html, en relaidad
//busca en el objeto global el elemento root al cual lo encuentra en public/index.html
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
