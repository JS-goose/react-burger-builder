import React from 'react';
import Button from '../../../UI/Button/Button'
import styles from './MenuToggle.module.css';

export default function MenuToggle(props) {
    return (
        <article>
            <Button id={styles.menuButton} onClick={props.clicked}>Menu</Button>
        </article>
    )
}
