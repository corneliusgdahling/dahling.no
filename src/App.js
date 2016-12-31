import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';

export default class App extends Component {
  name = "Cornelius";
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <h1>Velkommen til Dahling.no</h1>
        <h2>{`Hei jeg heter ${name}`}</h2>
        {console.log("test")}
      </div>

    );
  }
}
