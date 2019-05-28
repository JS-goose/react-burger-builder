import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './Ingredients/BurgerIngredients';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((itemKey) => {
    return [...Array(props.ingredients[itemKey])].map((_, i) => {
      return <BurgerIngredients key={itemKey + i} type={itemKey} />
    })
  })
  return (
    <div className={styles['Burger']}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="tomato" />
      <BurgerIngredients type="salad" />
      <BurgerIngredients type="bacon" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
