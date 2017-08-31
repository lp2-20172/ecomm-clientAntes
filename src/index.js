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

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Button from 'material-ui/Button';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: red, // Purple and green play nicely together.
        secondary: {
            ...green,
            A400: '#00e677',
        },
        error: red,
    },
});




ReactDOM.render(

    <Provider store={store} >
        <MuiThemeProvider theme={theme}>
            <Router>
                <MainLayout />
            </Router>
        </MuiThemeProvider>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
