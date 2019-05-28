import React, {Component} from 'react';
import styles from './BurgerIngredients.module.css';

class BurgerIngredients extends Component {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={styles['BreadBottom']} />;
      break;
    case 'bread-top':
      ingredient = (
        <div className={styles['BreadTop']}>
          <div className={styles['Seeds1']} />
          <div className={styles['Seeds2']} />
        </div>
      );
      break;
    case 'salad':
      ingredient = <div className={styles['Salad']} />;
      break;
    case 'bacon':
      ingredient = <div className={styles['Bacon']} />;
      break;
    case 'cheese':
      ingredient = <div className={styles['Cheese']} />;
      break;
    case 'meat':
      ingredient = <div className={styles['Meat']} />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;

  render() {
      return(<p>Test</p>)
  }
}

export default BurgerIngredients;
