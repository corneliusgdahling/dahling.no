import React, { Component } from 'react';

export default class Home extends Component{

  render(){
    name = "Dahling.no";
    return(
      <div>
        <h2>{`Velkomment til ${name}`}</h2>
        {console.log("home")}
      </div>
    );
  }
}
