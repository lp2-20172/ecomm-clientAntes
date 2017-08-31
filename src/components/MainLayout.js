import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
import routes from './routes'

import '../App.css';

class MainLayout extends Component {
    render() {
        return (

            
                <div style={{ display: 'flex' }}>
                    <div style={{
                        padding: '10px',
                        height: '100%',
                        width: '20%',
                        background: '#f0f0f0'
                    }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                            <li><NavLink exact to="/abouts" activeClassName="selected">abouts</NavLink></li>
                            <li><NavLink exact to="/one" activeClassName="selected">one</NavLink></li>
                            <li><NavLink exact to="/counters" activeClassName="selected">Counter</NavLink></li>
                        </ul>
                        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
                        <OldSchoolMenuLink to="/abouts" label="About" />
                        <OldSchoolMenuLink to="/one" label="one" />
                        <OldSchoolMenuLink to="/two" label="two" />

                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                    </div>

                    <div style={{ flex: 1, padding: '10px' }}>

                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
           
        )
    }
}

export default MainLayout;



const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <div className={match ? 'active' : ''}>
            {match ? '> ' : ''}<Link to={to}>{label}</Link>
        </div>
    )} />
)

const NoMatch = ({ location }) => (
    <div>
        <h3>No se encontró la página <code>{location.pathname}</code></h3>
    </div>
)