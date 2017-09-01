import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './components/MainLayout';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import './index.css'
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
