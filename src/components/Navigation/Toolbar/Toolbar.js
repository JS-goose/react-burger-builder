import React from 'react'
import styles from './Toolbar.module.css';
// Icon from Darius Dan on https://flaticon.com
import logo from '../../../assets/food-stand.svg'

export default function Toolbar(props) {
    return (
        <header className={styles['Toolbar']}>
            {/*These are placeholders*/}
            <img src={logo} alt="a food stand icon"/>
            <div>Menu</div>
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
