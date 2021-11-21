import React, {useState} from 'react';
import Receipts from './Receipts';
import App from './App';
import './Receipt.css'

function Receipt(props) {
    const [receipt, setReceipt] = useState(props.data.person)

    const handleClick = (event) => {
        setReceipt(receipt.paid = true)
        // props.data.paid.update (true)
        console.log(handleClick);
    }
    return (
        // <div className = {props.data.person === true ? "respaid" : "unpaidR"}>
            // {/* {console.log(props.initialState[0])} */}

            <div onClick={handleClick} className = {props.data.paid === true ? "paidReceipt" : "unpaidReceipt"}>
            <h2>{props.data.person}</h2>
                <p><span>Main:</span>{props.data.order.main}</p>
                <p><span>Protein:</span>{props.data.order.protein}</p>
                <p><span>Rice: </span>{props.data.order.rice}</p>
                <p><span>Sauce: </span>{props.data.order.sauce}</p>
                <p><span>Drink: </span>{props.data.order.drink}</p>
                <p><span>Cost: </span>{props.data.order.cost}</p>
                <button type="button" onClick={handleClick}>I Paid</button>
        </div>
    );
}

export default Receipt;