import React from 'react';
import styles from './NavigationItem.module.css';

export default function NavigationItem(props) {
  return (
    <li>
      <a href={props.link} className={styles['navigationItem']}>
        {props.children}
      </a>
    </li>
  );
}
