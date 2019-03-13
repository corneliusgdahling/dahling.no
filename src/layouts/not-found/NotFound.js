import React, { Component } from 'react';
import './NotFound.css';

export default class NotFound extends Component{

  render(){
    return(
      <div>
        <h2 id="not-found-title">The page you are trying to reach does not exist. Why you do dis?</h2>
        {console.log("404 page")}
      </div>
    )
  }
}
