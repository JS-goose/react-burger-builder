import React from 'react';

const buildControl = (props) => {
    return (<div>
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>)
};

export default buildControl;