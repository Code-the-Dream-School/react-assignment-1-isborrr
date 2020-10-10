import React, {Component}  from 'react';
import Cell from '../components/Cell';
  

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
       xNextPlayer: true,
    };
}

 handleClick(i) {
    const cells = this.state.cells.slice();
    if (calculateWinner(cells) || cells[i]) {
      return;
    }
    cells[i] = this.state.xNextPlayer ? 'X' : 'O';
    this.setState({
      cells: cells,
      xNextPlayer: !this.state.xNextPlayer,
    });
  }

  renderCell(i) {
    return (
       <Cell
          value={this.state.cells[i]} 
          onClick={() => this.handleClick(i)}
       />

    );
  }
  render(){
      const winner = calculateWinner(this.state.cells);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xNextPlayer ? 'X' : 'O');
    }
      return(
          <div className='Board middle ' >
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className="board-row">
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className="board-row">
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}

export default Board;
// import Board from '../components/Board.js';
// import img0 from '../images/0.png';
function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}