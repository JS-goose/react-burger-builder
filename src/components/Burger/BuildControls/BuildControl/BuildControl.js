import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => {
    return (<div className={styles['BuildControl']}>
        <div className={styles['Label']}>{props.label}</div>
        <button classname={styles['Less']}>Less</button>
        <button classname={styles['More']}>More</button>
    </div>)
};

export default buildControl;