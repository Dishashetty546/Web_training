// App.js
import './App.css';
import React, { Component } from 'react';
import LoggerApp from './Lifecycle_component/LoggerApp.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: Math.random()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ appState: Math.random() });
    }, 5000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <LoggerApp />
      </div>
    );
  }
}

export default App;
