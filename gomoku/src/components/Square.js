import React, { Component } from 'react';

const Square = props => {
  return (
    <div className="square" onClick={props.onClick}>
      <div className={props.value}></div>
    </div>
  );
}
 
export default Square;