import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };
  
class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneeplayer"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  }
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend}`)
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const PPortals = BoundaryHOC(Portals);

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

const PReturnTypes = BoundaryHOC(ReturnTypes);

const ErrorFallback = () => "Sorry something went wrong";

class App extends Component {
  render() {
    return (
      <Fragment>
        <PReturnTypes />
        <PPortals />
        <PErrorMaker />
      </Fragment>
        
    )
  }
}

export default BoundaryHOC(App);
