import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import './Header.css';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'


class Header extends Component {
	render
	
	()
	 {
        return (
			
            <CardContent>
				
                <Typography type="headline">
				
				LAB J&J	
                    <nav>
						<ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
                            <li><NavLink exact to="/abouts" activeClassName="selected">abouts</NavLink></li>
                            <li><NavLink exact to="/one" activeClassName="selected">one</NavLink></li>
                            <li><NavLink exact to="/counters" activeClassName="selected">Counter</NavLink></li>
                            <li><NavLink exact to="/users" activeClassName="selected">users</NavLink></li>
                            <li><NavLink exact to="/ecomms" activeClassName="selected">ecomms</NavLink></li>
                        </ul>
					</nav>

                </Typography>
				
		
		


            </CardContent>
        );
    }
}

export default Header;

