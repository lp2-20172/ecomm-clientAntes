import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from 'react-router-dom'
import routes from './routes'


class MainLayout extends Component {
    render() {
        return (

            <Router>
                <div style={{ display: 'flex' }}>
                    <div style={{
                        padding: '10px',
                        height: '100%',
                        width: '20%',
                        background: '#f0f0f0'
                    }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/abouts">abouts</Link></li>
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
            </Router>
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