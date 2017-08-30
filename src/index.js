import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, hashHistory } from 'react-router'

import routes from './routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory} routes={routes}>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
