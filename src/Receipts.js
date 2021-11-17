import React from 'react';
import Receipt from './Receipt';
import './Receipt.css'

function Receipts(props) {
    return (
        <div className="container">
            {props.initialState.map(data => {
                if (data.paid === false) {
               return <Receipt data={data} />
}})}
        </div>
    )
}

export default Receipts;