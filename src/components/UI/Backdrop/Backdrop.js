import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  return props.show ? (
    <div className={styles['Backdrop-container']} onClick={props.displayModal}>Here is the backdrop</div>
  ) : null;
};

export default Backdrop;
