import React from 'react';
import Button from '../../UI/Button/Button.js';

const OrderSummary = (props) => {
  // The props being passed down come in object form, this converts that to an array to map over and display the list items
  const summary = Object.keys(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        <span style={{ fontWeight: 700 }}>{ingredient}</span>:{' '}
        {props.ingredients[ingredient]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3 style={{color: 'rgb(228, 133, 10)', textDecoration: 'underline'}}>Order Summary</h3>
      <p>Your tasty burger with the fresh ingredients listed below:</p>
      <ul>{summary}</ul>
      <p>Total Price: ${props.price.toFixed(2)}</p>
      <Button btnType="Continue" clicked={props.continuePurchaseHandler}>
        Continue
      </Button>
      <Button btnType="Cancel" clicked={props.cancelPurchaseHandler}>
        Cancel
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
