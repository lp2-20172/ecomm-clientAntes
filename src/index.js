import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './components/MainLayout';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <MainLayout />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
