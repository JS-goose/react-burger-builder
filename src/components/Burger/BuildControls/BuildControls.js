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
  <React.Fragment>
    <div className={styles['price-display']}> 
      Total Price: ${props.price}
    </div>
  
  <div className={styles['BuildControls']}>
    {controls.map((item) => 
        <BuildControl
          addIngredient={() => props.addIngredient(item.type)}
          removeIngredient={() => props.removeIngredient(item.type)}
          key={item.label}
          label={item.label}
          disabled={props.disabled[item.type]}
        />
    )}
  </div>
  </React.Fragment>
);

export default buildControls;
