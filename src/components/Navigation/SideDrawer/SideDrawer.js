import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/food-stand.svg';
import styles from './SideDrawer.module.css';

const SideDrawer = () => {
    return (
        <div>
           <img src="{logo}" alt="a food stand logo"/> 
           <nav>
               <NavigationItems />
           </nav>
        </div>
    )
}

export default SideDrawer
