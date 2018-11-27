import React, { Component } from 'react';
import Board from './Board';
import Btn from './Btn';
import calcWinner from './calcWinner';

const initState  = {
  squares: Array(19 * 19).fill(null),
  whiteIsNext: true,
  winner: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleClick = i => {
    const squares = [...this.state.squares];
    if (this.state.winner || squares[i]) return;
    squares[i] = this.state.whiteIsNext ? 'piece-white': 'piece-black';
    
    this.setState({ 
      squares,
      whiteIsNext: !this.state.whiteIsNext,
      winner: calcWinner(squares)
    });
  }

  restartGame = () => {
    this.setState(initState);
  }
  
  redoStep = () => {}

  replayGame = () => {}

  render() {
    return (
      <div className='app'>
        <div className="info">
          {this.state.winner ?
            <div className="status"><b>{this.state.winner === 'white' ? 'WHITE' : 'BLACK'}</b> wins!</div> :
            <div className="status">Next player is <b>{this.state.whiteIsNext ? 'WHITE' : 'BLACK'}</b></div>
          }
        </div>
        <Board 
          squares={this.state.squares}
          onClick={i => {this.handleClick(i)}}
        />
        <div className="info">
          <Btn name="Restart" onClick={this.restartGame} />
          <Btn name="Redo" onClick={this.redoStep} />
          <Btn name="Replay" onClick={this.replayGame} />
        </div>
      </div>
    );
  }
}

export default App;
