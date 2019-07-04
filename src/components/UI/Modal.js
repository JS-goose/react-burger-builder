import React from 'react';
import styles from './Modal.module.css'

let modalDisplay;

const Modal = (props) => {
  if (!props.orderable) {
    return <div className={styles['hidden']}>
    {props.children}
  </div>;
  } else if (props.orderable) {
    return <div className={styles['Modal-container']}>
    {props.children}
  </div>;
  }
};

export default Modal;
