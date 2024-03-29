import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
  return (
    <ul id={styles['navigationItems-list']}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">About</NavigationItem>
    </ul>
  );
}
