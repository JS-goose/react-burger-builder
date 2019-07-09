import React from 'react';
import styles from './Modal.module.css';
import Backdrop from './Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <React.Fragment>
    <Backdrop show={props.show} displayModal={props.displayModal}/>
    <div
      className={styles['Modal-container']}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
    </React.Fragment>
  );
};

export default Modal;
