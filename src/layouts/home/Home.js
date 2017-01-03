import React, { Component } from 'react';

export default class Home extends Component{

  render(){
    const name = "Dahling.no";
    return(
      <div>
        <h1>{`Velkommen til ${name}`}</h1>
        {console.log("home")}
      </div>
    );
  }
}
