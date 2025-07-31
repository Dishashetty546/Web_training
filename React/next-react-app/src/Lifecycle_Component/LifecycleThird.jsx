import React, { Component } from 'react';

class LoggerApp extends Component {
  constructor(props) {
    super(props);
    console.log("ChildComponent: Constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("ChildComponent: Component Did Mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ChildComponent: Should Component Update");
    return this.state.count !== nextState.count; // Only update if count changes
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ChildComponent: Component Did Update");
  }

  componentWillUnmount() {
    console.log("ChildComponent: Component Will Unmount");
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LoggerApp;
