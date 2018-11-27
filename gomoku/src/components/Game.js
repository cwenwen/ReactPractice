import React, { Component } from 'react';
import Board from './Board';
import Btn from './Btn';
import calcWinner from '../functions/calcWinner';

const initState  = {
  history: [{
    squares: Array(19 * 19).fill(null),
  }],
  whiteIsNext: true,
  winner: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleClick = i => {
    const { winner, whiteIsNext, history } = this.state;
    const current = history[history.length - 1];
    const squares = [...current.squares];

    if (winner || squares[i]) return;
    squares[i] = whiteIsNext ? 'piece-white': 'piece-black';
    
    this.setState({ 
      history: history.concat([{
        squares
      }]),
      whiteIsNext: !whiteIsNext,
      winner: calcWinner(squares)
    });
  }

  restartGame = () => {
    this.setState(initState);
  }
  
  redoStep = () => {
    const history = [...this.state.history];
    if (history.length < 2) return;
    history.pop();
    const current = history[history.length - 1];
    this.setState({ 
      history,
      whiteIsNext: !this.state.whiteIsNext,
      winner: calcWinner(current.squares)
    })
  }

  replayGame = () => {
    const playbook = [...this.state.history];
    const history = [];
    const showHistory = i => {
      history.push(playbook[i]);
      this.setState({ history });
    }

    for (let i = 0; i < playbook.length; i++) {
      setTimeout(() => { showHistory(i) }, 1000 * i);
    }
  }

  render() {
    const { winner, whiteIsNext, history } = this.state;
    const current = history[history.length - 1];
    return (
      <div className='app'>
        <div className="info">
          {winner ?
            <div className="status"><b>{winner === 'white' ? 'WHITE' : 'BLACK'}</b> wins!</div> :
            <div className="status">Next player is <b>{whiteIsNext ? 'WHITE' : 'BLACK'}</b></div>
          }
        </div>
        <Board 
          squares={current.squares}
          onClick={i => {this.handleClick(i)}}
        />
        <div className="info">
          <Btn name="Restart" onClick={this.restartGame} />
          {winner ? 
            <Btn name="Replay" onClick={this.replayGame} /> : 
            <Btn name="Redo" onClick={this.redoStep} />
          }
        </div>
      </div>
    );
  }
}

export default App;