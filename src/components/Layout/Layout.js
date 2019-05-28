import React from 'react';
import styles from './Layout.module.css'

const layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main id={styles['content']}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;