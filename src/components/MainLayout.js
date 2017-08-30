import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import About from './About';
import Home from './Home';


class MainLayout extends Component {
    render() {
        return (
            <Router>
                <div>
                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
                    <OldSchoolMenuLink to="/about" label="About" />
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
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


