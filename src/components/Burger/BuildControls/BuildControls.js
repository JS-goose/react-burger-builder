import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Tomato', type: 'tomato' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={styles['BuildControls']}>
    {controls.map((item) => {
      return (
        <BuildControl
          addIngredient={() => props.addIngredient(item.type)}
          removeIngredient={props.removeIngredient}
          key={item.label}
          label={item.label}
        />
      );
    })}
  </div>
);

export default buildControls;
