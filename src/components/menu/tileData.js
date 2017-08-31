// @flow
// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'


export const mailFolderListItems = (
    <div>

        <ListItem button>
            <NavLink exact to="/" activeClassName="selected">
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </NavLink>
        </ListItem>
        <ListItem button>
            <NavLink exact to="/abouts" activeClassName="selected">
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="abouts" />
            </NavLink>
        </ListItem>
        <ListItem button>
            <NavLink exact to="/one" activeClassName="selected">
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="one" />
            </NavLink>
        </ListItem>
        <ListItem button>
            <NavLink exact to="/counters" activeClassName="selected">
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="counters" />
            </NavLink>
        </ListItem>
        <ListItem button>
            <NavLink exact to="/users" activeClassName="selected">
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="users" />
            </NavLink>
        </ListItem>
        <ListItem button>
            <NavLink exact to="/ecomms" activeClassName="selected">
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="ecomms" />
            </NavLink>
        </ListItem>



        
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