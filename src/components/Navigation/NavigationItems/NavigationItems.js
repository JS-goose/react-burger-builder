import React from 'react';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
  return (
    <ul id={styles['navigationItems-list']}>
      <li>
        <a href="/">Home</a>
        <a href="/">Food Menu</a>
        <a href="/">About</a>
        <a href="/">Contact Us</a>
      </li>
    </ul>
  );
}
