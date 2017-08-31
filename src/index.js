import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './components/MainLayout';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <MainLayout />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
