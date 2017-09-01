// @flow
// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

import {
    Route,
    Link
} from 'react-router-dom'

//https://reacttraining.com/react-router/web/api/Route/children-func
const ListItemLink = ({ to, ...rest }) => (
    <Route exact path={to} children={({ match }) => (
        <Link to={to} {...rest}>
        <ListItem button className={match ? 'selected' : ''} >
            
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={rest.label}>

                </ListItemText>
            
        </ListItem>
        </Link>
    )} />
)

export const mailFolderListItems = (
    <div>
        <ListItemLink to="/" label="Home" />
        <ListItemLink to="/abouts" label="abouts" />
        <ListItemLink to="/one" label="one" />
        <ListItemLink to="/counters" label="counters" />
        <ListItemLink to="/users" label="users" />
        <ListItemLink to="/ecomms" label="ecomms" />



    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="All mail" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
        </ListItem>
    </div>
);