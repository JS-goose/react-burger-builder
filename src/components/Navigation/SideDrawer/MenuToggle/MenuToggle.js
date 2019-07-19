import React from 'react';
import styles from './MenuToggle.module.css';

export default function MenuToggle(props) {
    return (
        <article>
            <button id={styles.menuButton} onClick={props.clicked}>Menu</button>
        </article>
    )
}
