import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Tomato', type: 'tomato'},
]

const buildControls = (props) => (
    <div className={styles['BuildControls']}>
        {controls.map(item => {
            return <BuildControl addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} type={item} key={item.label} label={item.label}/>
        })}
    </div>
);

export default buildControls;