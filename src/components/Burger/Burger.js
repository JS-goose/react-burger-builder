import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './Ingredients/BurgerIngredients';

const Burger = (props) => {
  return <div className={styles['Burger']}>
      <BurgerIngredients type='bread-top'/>
      <BurgerIngredients type='bread-cheese'/>
      <BurgerIngredients type='bread-mean'/>
      <BurgerIngredients type='bread-bottom'/>
  </div>;
};

export default Burger;
