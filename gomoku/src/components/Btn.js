import React, { Component } from 'react';

const Btn = props => {
  return (
    <div className="btn" onClick={props.onClick}>
      {props.name}
    </div>
  );
}
 
export default Btn;