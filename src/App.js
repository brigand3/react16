import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Jusg touched it!";

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
      <Fragment>
        <ReturnTypes />
        <Portals />
      </Fragment>
        
    )
  }
}

export default App;
