import React from 'react';
import './Quotes.css';
let Quotes = (props) => {
    return (      
        <React.Fragment>
            <div className = "quoteBox">
                <div className = "quotes">{props.quotation}</div>
                <div className = "quotesAuthor">-{props.author}</div>
            </div>
        </React.Fragment>
    )

}
export default Quotes;