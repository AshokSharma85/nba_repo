import React,{Component} from 'react';
import TeamApi from './TeamApi.js'; 
import Game from './Game.js';

import './App.css';

class App extends Component {
  teamHandler()
  {
    document.getElementById("team").style.backgroundColor="coral";
    document.getElementById("game").style.backgroundColor="white";
  }

   gameHandler()
  {
    document.getElementById("team").style.backgroundColor="white";
    document.getElementById("game").style.backgroundColor="coral";
  }


  constructor(){
    super();
    this.state={
        showMe:true
    }
}
operation()
    {
        this.setState({
            showMe:false
        });
    }

    operationTrue()
    {
        this.setState({
            showMe:true
        });
    }
 render(){
  return (
    <div className="App" >
       <h2 className="heading"> <center> NBA REPO</center></h2>


      <div className="bt1">
            <button className="button1" id="team" onClick={()=>{this.operationTrue();this.teamHandler()}}>NBA Teams</button>
            <button  className="button2" id="game" onClick={()=>{this.operation();this.gameHandler()}}>NBA Games</button>
        </div>
       

            {
                     this.state.showMe?<div><TeamApi/></div>:<div><Game/></div>
            }

    </div>
  );
}}

export default App;
