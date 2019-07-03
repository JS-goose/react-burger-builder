import React from 'react';

const OrderSummary = (props) => {
  const summary = Object.keys(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        {ingredient}: {props.ingredients[ingredient]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>Your tasty burger with the fresh ingredients listed below:</p>
      <ul>
        {summary}
      </ul>    
    </React.Fragment>
  );
};

export default OrderSummary;
