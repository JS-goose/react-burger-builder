import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
  return (
    <ul id={styles['navigationItems-list']}>
      <NavigationItem>Home</NavigationItem>
      <NavigationItem>Burger Builder</NavigationItem>
      <NavigationItem>About Us</NavigationItem>
      <NavigationItem>Contact Us</NavigationItem>
    </ul>
  );
}
