import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      {this.props.children}
      </div>

    );
  }
}
