import React from 'react'
import About from './About';
import Home from './Home';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: Home
    },
    {
        path: '/abouts',
        sidebar: () => <div>abouts!</div>,
        main: About
    },
    {
        path: '/one',
        sidebar: () => <div>one!</div>,
        main: () => <h2>One</h2>
    }
]

export default routes