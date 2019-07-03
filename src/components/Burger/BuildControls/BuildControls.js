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
    <p className={styles['price-display']}>Total Price: ${props.price.toFixed(2)}</p>

    {controls.map((item) => (
      <BuildControl
        addIngredient={() => props.addIngredient(item.type)}
        removeIngredient={() => props.removeIngredient(item.type)}
        key={item.label}
        label={item.label}
        disabled={props.disabled[item.type]}
      />
    ))}

    <button onClick={props.orderableHandler} className={styles['checkout-button']} disabled={!props.updatePurchaseState}>
      CHECK OUT
    </button>
  </div>
);

export default buildControls;
