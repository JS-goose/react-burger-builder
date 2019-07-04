import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  // const modalDisplay = <div className={styles["Modal-container"]}>{props.children}</div>;

  // const modalNoDisplay = <div className={styles["Modal-container-hidden"]}>{props.children}</div>;

  // return props.purchaseable ? modalDisplay : modalNoDisplay;

  // if (!props.purchaseable) {
  //   return <div className={styles['hidden']}>
  //   {props.children}
  // </div>;
  // }

  // if (props.purchaseable) {
  //   return <div className={styles['Modal-container']}>
  //   {props.children}
  // </div>;
  // }

  return (
    <div
      className={styles["Modal-container"]}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
