import React from 'react';

const OrderSummary = (props) => {
  // The props being passed down come in object form, this converts that to an array to map over and display the list items
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
