import React, { Component } from 'react';
import Board from './Board';
import Btn from './Btn';

class App extends Component {
  constructor(props) {
    super(props);
  }

  restartGame = () => {}
  
  redoStep = () => {}

  replayGame = () => {}

  render() {
    return (
      <div className='app'>
        <div className="info">
          <div className="status">Next player is <b>BLACK</b></div>
        </div>
        <Board />
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
