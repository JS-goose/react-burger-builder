import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import logo from '../../../assets/food-stand.svg';
import styles from './SideDrawer.module.css';

const SideDrawer = () => {
  return (
    <React.Fragment>
      <Backdrop show/>
      <section className={styles.SideDrawerContainer}>
        <img src={logo} alt="a food stand logo" />
        <nav className={styles.sideDrawerNav}>
          <NavigationItems />
        </nav>
      </section>
    </React.Fragment>
  );
};

export default SideDrawer;
