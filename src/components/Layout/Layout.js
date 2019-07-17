import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }

  sideDrawerClosingHandler = () => {

  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer />
        <main id={styles['content']}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
