import React from 'react';
import styles from './NavigationItem.module.css';

export default function NavigationItem(props) {
  return (
    <li className={styles['navigationItem']}>
      <a href={props.link} className={props.active ? styles['active'] : null}>
        {props.children}
      </a>
    </li>
  );
}
