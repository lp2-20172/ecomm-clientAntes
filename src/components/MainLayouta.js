/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import { mailFolderListItems, otherMailFolderListItems } from './menu/tileData';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';

import {
    Switch,
    Route
} from 'react-router-dom'
import routes from './routes'
import '../App.css';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'stretch',
        minHeight: '100vh',
        width: '100%',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: 'auto',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        height: 56,
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
    },
    content: {
        width: '100%',
        marginLeft: -drawerWidth,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});

class PersistentDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: !this.state.open });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        let disablePermanent = false;

        return (
            <div className={classes.root}>
                <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="contrast"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" noWrap>
                            Persistent drawer
              </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <Hidden lgUp={!disablePermanent}>
                        <Drawer
                            type="temporary"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            open={this.state.open}
                            onRequestClose={this.handleDrawerClose}
                        >
                            <div className={classes.drawerInner}>
                                <div className={classes.drawerHeader}>
                                    <IconButton onClick={this.handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <List className={classes.list}>{mailFolderListItems}</List>
                                <Divider />
                                <List className={classes.list}>{otherMailFolderListItems}</List>
                            </div>
                        </Drawer>
                        {disablePermanent ? null : (
                            <Hidden lgDown implementation="css">
                                <Drawer
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    type="permanent"
                                    open={this.state.open}
                                    onRequestClose={this.handleDrawerClose}
                                >
                                    <div className={classes.drawerInner}>
                                        <div className={classes.drawerHeader}>
                                            <IconButton onClick={this.handleDrawerClose}>
                                                <ChevronLeftIcon />
                                            </IconButton>
                                        </div>
                                        <Divider />
                                        <List className={classes.list}>{mailFolderListItems}</List>
                                        <Divider />
                                        <List className={classes.list}>{otherMailFolderListItems}</List>
                                    </div>

                                </Drawer>
                            </Hidden>
                        )}

                    </Hidden>
                </div>

                <Paper className={classNames(classes.content, this.state.open && classes.contentShift)}>
                    <Typography type="body1" noWrap>
                        {'You think water moves fast? You should see ice.'}
                    </Typography>

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

                </Paper>
            </div>
        );
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersistentDrawer);


const NoMatch = ({ location }) => (
    <div>
        <h3>No se encontró la página <code>{location.pathname}</code></h3>
    </div>
)
