import React from 'react'
import styles from './Toolbar.module.css';

export default function Toolbar(props) {
    return (
        <header className={styles['Toolbar']}>
            {/*These are placeholders*/}
            <div>Menu</div>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </nav>
        </header>
    )
}
