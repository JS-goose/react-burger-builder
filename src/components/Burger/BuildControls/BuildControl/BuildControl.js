import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => {
  return (
    <div className={styles['BuildControl']}>
      <div className={styles['Label']}>{props.label}</div>
      {/*Less button becomes disabled if that particular ingredient = 0*/}
      <button disabled={props.disabled} onClick={props.removeIngredient} className={styles['Less']}>
        Less
      </button>
      <button onClick={props.addIngredient} className={styles['More']}>
        More
      </button>
    </div>
  );
};

export default buildControl;
