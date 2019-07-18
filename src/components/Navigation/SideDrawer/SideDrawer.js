import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import logo from '../../../assets/food-stand.svg';
import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
  let conditionalClasses = [styles.SideDrawerContainer, styles.close];
  if (props.open) {
    conditionalClasses = [styles.SideDrawerContainer, styles.open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <section className={conditionalClasses.join(' ')}>
        <img src={logo} alt="a food stand logo" />
        <nav className={styles.sideDrawerNav}>
          <NavigationItems />
        </nav>
      </section>
    </React.Fragment>
  );
};

export default SideDrawer;
