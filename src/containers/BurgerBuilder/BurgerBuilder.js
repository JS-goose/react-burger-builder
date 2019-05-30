import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.3,
  tomato: 0.2,
  cheese: 0.5,
  bacon: 0.75,
  meat: 1.25,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      tomato: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
    totalPrice: 4,
  };

  addIngredient = (type) => {
    const oldIngCount = this.state.ingredients[type];
    const updatedIngCount = oldIngCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedIngCount;
  }

  removeIngredient = (type) => {
    console.log('remove',type);
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
