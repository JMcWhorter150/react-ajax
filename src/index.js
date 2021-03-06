import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// AJAX stands for Asynchronous JavaScript and XML, technique and not technology (think it's just a version of FETCH)
import axios from 'axios';
const API_ENDPOINT = 'https://swapi.co/api/people/1/';

axios.get(API_ENDPOINT)
    .then(r => console.log(r));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
