/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './menu/tileData';

const styles = {
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    open: {
      top: false,
      left: true,
      bottom: false,
      right: false,
    },
  };

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ open: drawerState });
  };

  handleLeftOpen = () => {
    this.toggleDrawer('left', true);
  };

  handleLeftClose = () => {
    this.toggleDrawer('left', false);
  };


  render() {
    const classes = this.props.classes;

    const sideList = (
      <div>
        <List className={classes.list}>{mailFolderListItems}</List>
        <Divider />
        <List className={classes.list}>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div>
        <List className={classes.listFull}>{mailFolderListItems}</List>
        <Divider />
        <List className={classes.listFull}>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div> 
        <Drawer
        type="persistent"
          open={this.state.open.left}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
          {sideList}
        </Drawer>

        BIOMEDICAMENTOS START
        <Button onClick={this.handleLeftOpen}>Open Left</Button>

        
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);