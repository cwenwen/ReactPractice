import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  renderSquare = i => {
    let { onClick } = this.props
    return (
      <Square
        key={i}
        id={i}
        onClick={onClick}
      />
    )
  }
  
  render() {
    let indexRow = [];
    for (let i = 0; i < 19; i++) {
      indexRow.push(i);
    }

    let indexColumn = [];
    for (let i = 0; i < 19; i++) {
      indexColumn.push(i);
    }

    return (
      <div className="board">
        {indexColumn.map(y => {
          return (
            <div key={y} className="board-row">
              {indexRow.map(x => {
                return this.renderSquare(y * 19 + x)
              })}
            </div>
          )
        })}
      </div>
    );
  }
}
 
export default Board;