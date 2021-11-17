import React from 'react';
import Receipts from './Receipts';

function Receipt(props) {
    return (
        <div>
            {props.initalState.map(receipts => {
                return <Receipts initalStateObj={receipts}
})}
        </div>
    );
}

export default Receipt;