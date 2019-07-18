import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Toolbar.module.css';
// Icon from Darius Dan on https://flaticon.com
import logo from '../../../assets/food-stand.svg';

export default function Toolbar(props) {
  return (
    <header className={styles['Toolbar']}>
      {/*These are placeholders*/}
      <img src={logo} alt="a food stand icon" />
      <div>Menu</div>
      <nav className={styles.showOnDesktop}>
        <NavigationItems />
      </nav>
    </header>
  );
}
