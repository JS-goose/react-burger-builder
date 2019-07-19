import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosingHandler = () => {
    console.log(this);
    this.setState({ showSideDrawer: true });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar toggleSideDrawer={this.sideDrawerClosingHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosingHandler} />
        <main id={styles['content']}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
