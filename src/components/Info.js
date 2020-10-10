import React, {Component} from 'react';
import Image1 from '../images/0.png';
import Image2 from '../images/1.png';
    


class Info extends Component{
state = {
    playerX: '',
    playerO: '',
  }
 handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    })
  };



 handle(event){
   console.log("this",event.target.value)
}
  render(){
 function logging (){
//   var p1= this.ref.name1.value;
// var p2= this.ref.name2.value;
  console.log("cool"+this.refs.name1.value)
// console.log("this is p2"+p1)
}
    return(
<div className='center'>
    <div className='info   d-flex flex-row'>
        <div className='player1 mr-3'>
          <div className='name'>
            Name:
            <img src={Image1} className='icon' alt="Player1 icon"></img>
          </div>
          <div >

            <input type="text" name="playerX" className="form-control" onChange={this.handleChange}></input>
          </div>
        </div>
        <div className='player2 ml-3'>
          <div className='name'>
            Name:
            <img src={Image2} className='icon' alt="Player2 icon"></img>
          </div>
          <div >
           <input ref="name2" type="text" className="imput form-control" onChange={this.handleChange}></input>
          </div>
        </div>
    </div>
<button style={{display : "none" }} onClick={this.handleSubmit} >Submit</button>
 {/* <button onClick={logging} className=''>log button</button> */}
</div>
)
  }
}


export default Info ;