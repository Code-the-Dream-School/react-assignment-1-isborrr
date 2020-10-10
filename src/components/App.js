import React, {Component} from 'react';
import Header from '../components/Header.js';
import Board from '../components/Board.js';
import img0 from '../images/0.png';
import img1 from '../images/1.png';
import Cell from './Cell.js';
import Info from './Info.js';

class Game extends Component {


  // if( this.state.gamestae)
  state={
    visible:false, buttonStart:false
};

  render(){
   var enterGame =<button className='btn btn-dark niceFont buttonCentered' style={{display : "block" }} onClick={()=>{this.setState({visible:true}); }}>Start</button>
   var startGame= <button onClick={()=>{this.setState({buttonStart:true}); }} className='btn btn-dark niceFont buttonCentered'>Start Game</button>;
   var playerNames=<div className="makeFlex"><img src={img0} alt="missed" className="icon left" style={{display : "block" }}></img>ok<img src={img1} alt="missed" className='icon right' style={{display : "block" }}></img>cool</div>;
   var resetAndNew =<div><button className="btn btn-dark niceFont left">Restart </button> <button  className="btn btn-dark niceFont right" onClick={refreshPage}>New Game </button>   </div>
 //function for new game 
   function refreshPage() {
    window.location.reload(false);
    
  }   
    return (
  <div className='container'>
   {!this.state.visible && !this.state.buttonStart ? <><Header/>  {enterGame}</>: null }
   {this.state.visible && !this.state.buttonStart ?<><Header/><Info/> <>{startGame}</></>: null }
   {this.state.buttonStart ?<><Header/> <>{playerNames}</><Board/> {resetAndNew} </>: null }
 
    
    {/* the game started ? <Board/> : null */}
    {/* <Cell/> */}
    {/* <Info/> */}
  </div>
);
  }
}

export default Game;