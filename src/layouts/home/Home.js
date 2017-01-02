import React, { Component } from 'react';

export default class Home extends Component{

  render(){
    const name = "Dahling.no";
    return(
      <div>
        <h2>{`Velkommen til ${name}`}</h2>
        {console.log("home")}
      </div>
    );
  }
}
