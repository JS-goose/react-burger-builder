import React from 'react';

const Backdrop = (props) => {
    return (props.show ? <div>Here is the backdrop</div> : null);
}

export default Backdrop