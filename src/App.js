import React, { Component, Fragment } from 'react';
import './App.css';

class ReturnTypes extends Component {
  render() {
    return (
      <Fragment>
        <header>Header</header>
        <div>Body</div>
        <footer>Footer</footer>
      </Fragment>
    )
  }
}

class App extends Component {
  render() {
    return (
        <ReturnTypes />
    )
  }
}

export default App;
