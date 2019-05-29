import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './Ingredients/BurgerIngredients';
// import { read } from 'fs';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((itemKey) => {
    return [...Array(props.ingredients[itemKey])].map((_, i) => {
      return <BurgerIngredients key={itemKey + i} type={itemKey} />
    })
  }).flat(2);
  
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p style={style}>Please add some ingredients!</p>
  }
  return (
    <div className={styles['Burger']}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

const style = {
  color: 'red',
}

export default burger;
