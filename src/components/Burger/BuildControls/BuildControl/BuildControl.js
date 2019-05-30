import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => {
    return (<div className={styles['BuildControl']}>
        <div className={styles['Label']}>{props.label}</div>
        <button onClick = {props.removeIngredient} className={styles['Less']}>Less</button>
        <button onClick = {props.addIngredient} className={styles['More']}>More</button>
    </div>)
};

export default buildControl;