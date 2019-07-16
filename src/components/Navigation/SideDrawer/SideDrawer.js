import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/food-stand.svg';
import styles from './SideDrawer.module.css';

const SideDrawer = () => {
    return (
        <section className={styles.SideDrawerContainer}>
           <img src={logo} alt="a food stand logo"/> 
           <nav>
               <NavigationItems />
           </nav>
        </section>
    )
}

export default SideDrawer
