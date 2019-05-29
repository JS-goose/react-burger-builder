import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      tomato: 0,
      cheese: 0,
      meat: 0,
    },
  };

  addIngredient = (type) => {
    console.log(type);
  }

  removeIngredient = (type) => {

  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredient}/>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
