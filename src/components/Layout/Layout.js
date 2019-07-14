import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'

const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <div>SideDrawer</div>
      <main id={styles['content']}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;