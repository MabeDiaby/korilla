import React from 'react';
import './Receipt.css'

function Receipt(props) {
    return (
        <div className = 'receipt'>
            {/* {console.log(props.initialState[0])} */}
            <h2>{props.data.person}</h2>
                <p><span>Main:</span>{props.data.order.main}</p>
                <p><span>Protein:</span>{props.data.order.protein}</p>
                <p><span>Rice: </span>{props.data.order.rice}</p>
                <p><span>Sauce: </span>{props.data.order.sauce}</p>
                <p><span>Drink: </span>{props.data.order.drink}</p>
                <p><span>Cost: </span>{props.data.order.cost}</p>
        </div>
    );
}

export default Receipt;