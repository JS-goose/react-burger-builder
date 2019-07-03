import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.3,
  tomato: 0.2,
  cheese: 0.5,
  bacon: 0.75,
  meat: 1.25,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      tomato: 0,
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    orderable: false,
  };

  updatePurchaseState = (ingredients) => {
    const total = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);

    this.setState({ purchasable: total > 0 });
  }

  addIngredient = (type) => {
    const updatedIngCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredient = (type) => {
    const updatedIngCount = this.state.ingredients[type] - 1;
    if (this.state.ingredients[type] <= 0) {
      return;
    }
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedIngCount;

    const priceSubtraction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceSubtraction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  orderableHandler = () => {
    this.setState({ orderable: true });
  };

  render() {
    // Ingredients copy to check how many of each ingredient
    const disabledInfo = {
      ...this.state.ingredients,
    };
    // Checks if the ingredients number is 0
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Modal show={this.orderableHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderable={this.orderableHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
