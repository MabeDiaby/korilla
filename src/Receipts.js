import React from 'react';
import './Receipt.css'

function Receipt(props) {
    return (
        <div className = 'receipt'>
            <span>
            {/* {console.log(props.initialState[0])} */}
            <h2>{props.initialState[0].person}</h2>
                <p><span>Main:</span> {props.initialState[0].order.main}</p>
                <p><span>Protein:</span> {props.initialState[0].order.protein}</p>
                <p><span>Rice: </span>{props.initialState[0].order.rice}</p>
                <p><span>Sauce: </span>{props.initialState[0].order.sauce}</p>
                <p><span>Drink: </span>{props.initialState[0].order.drink}</p>
            </span>
        </div>
    );
}

export default Receipt;