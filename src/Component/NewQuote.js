import React from 'react';
import './Quotes.css';
let NewQuote = (props) => {
    return (
        <div className = "refreshButton">
            <button onClick = {props.refresh}>Refresh</button>
        </div>  
    )

}
export default NewQuote;