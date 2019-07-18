import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosingHandler = () => {
    console.log(this);
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosingHandler} />
        <main id={styles['content']}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
