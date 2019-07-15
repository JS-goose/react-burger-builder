import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
  return (
    <ul id={styles['navigationItems-list']}>
      <NavigationItem link='/' active>Home</NavigationItem>
      <NavigationItem link='/'>Burger Builder</NavigationItem>
      <NavigationItem link='/'>About Us</NavigationItem>
      <NavigationItem link='/'>Contact Us</NavigationItem>
    </ul>
  );
}
