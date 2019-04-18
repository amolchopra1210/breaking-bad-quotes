import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header';
import Quotes from './Component/Quotes';
import NewQuote from './Component/NewQuote';
import  './App.css';

class App extends React.Component {
state = {
  quotes: '',
  author: ''
}

refreshQuote = () => {
  fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
  .then(data=>data.json()
  .then(result=>this.setState({
    quotes : result[0].quote,
    author : result[0].author
  })))
}
componentDidMount(){
  this.refreshQuote();
}

  render(){
    return(
      <React.Fragment>
        <Header/>
        <Quotes quotation = {this.state.quotes}
        author = {this.state.author}
        />
        <NewQuote refresh = {this.refreshQuote}/>
      </React.Fragment>
      )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"));

export default App;
