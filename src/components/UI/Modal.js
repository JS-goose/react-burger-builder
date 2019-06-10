import React from 'react';
import styles from './Modal.module.css'

const Modal = (props) => {
  return <div id={styles['Modal-container']}>{props.children}a</div>;
};

export default Modal;
