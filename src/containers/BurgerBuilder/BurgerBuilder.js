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
    console.log('add',type);
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
