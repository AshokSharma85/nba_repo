import React,{Component} from 'react'; 
import './App.css';
import Moment from 'react-moment';
import  './Model.css';

class Game extends Component {

  constructor(){
    super();
    this.state={
        showMe:false
    }
}
operation()
    {  
        this.setState({
            showMe:!this.state.showMe
        });
        
    }
  
    
    state={
        flag:false,
       Team1:null,
       Team2:null,
       Team3:null,
       Team4:null,
       Team5:null,
       Team6:null,
       Team7:null,
       Team8:null,
       Team9:null,
       Team10:null,
       Team11:null,
       Team12:null,
      

    }
    
    render()
    {

     
        return (
            <div>
              {this.state.flag?<div>
        <div className="row">
            <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team1.date}</Moment> </h3>
              <p>{this.state.Team1.status}</p>
              {
                this.state.showMe?<div><div className="model" id="clls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team1.date}</Moment> ({this.state.Team1.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team1.home_team.full_name} ({this.state.Team1.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team1.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team1.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team1.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team1.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team1.visitor_team.full_name} ({this.state.Team1.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team1.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team1.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team1.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team1.visitor_team_score}</p>                        
                        </div>
                    </div>
                <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>


             <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team2.date}</Moment> </h3>
              <p>{this.state.Team2.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team2.date}</Moment> ({this.state.Team2.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team2.home_team.full_name} ({this.state.Team2.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team2.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team2.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team2.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team2.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team2.visitor_team.full_name} ({this.state.Team2.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team2.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team2.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team2.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team2.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>

              <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team3.date}</Moment> </h3>
              <p>{this.state.Team3.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team3.date}</Moment> ({this.state.Team3.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team3.home_team.full_name} ({this.state.Team3.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team3.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team3.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team3.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team3.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team3.visitor_team.full_name} ({this.state.Team3.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team3.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team3.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team3.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team3.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>


             <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team4.date}</Moment> </h3>
              <p>{this.state.Team4.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team4.date}</Moment> ({this.state.Team4.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team4.home_team.full_name} ({this.state.Team4.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team4.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team4.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team4.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team4.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team4.visitor_team.full_name} ({this.state.Team4.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team4.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team4.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team4.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team4.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>
          
          
            <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team5.date}</Moment> </h3>
              <p>{this.state.Team5.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team5.date}</Moment> ({this.state.Team5.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team5.home_team.full_name} ({this.state.Team5.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team5.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team5.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team5.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team5.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team5.visitor_team.full_name} ({this.state.Team5.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team5.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team5.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team5.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team5.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>

          
          
          <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team6.date}</Moment> </h3>
              <p>{this.state.Team6.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team6.date}</Moment> ({this.state.Team6.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team6.home_team.full_name} ({this.state.Team6.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team6.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team6.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team6.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team6.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team6.visitor_team.full_name} ({this.state.Team6.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team6.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team6.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team6.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team6.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>
          
          
          
            <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team7.date}</Moment> </h3>
              <p>{this.state.Team7.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team7.date}</Moment> ({this.state.Team7.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team7.home_team.full_name} ({this.state.Team7.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team7.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team7.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team7.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team7.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team7.visitor_team.full_name} ({this.state.Team7.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team7.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team7.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team7.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team7.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>



             <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team8.date}</Moment> </h3>
              <p>{this.state.Team8.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team8.date}</Moment> ({this.state.Team8.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team8.home_team.full_name} ({this.state.Team8.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team8.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team8.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team8.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team8.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team8.visitor_team.full_name} ({this.state.Team8.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team8.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team8.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team8.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team8.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>



           
           <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team9.date}</Moment> </h3>
              <p>{this.state.Team9.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team9.date}</Moment> ({this.state.Team9.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team9.home_team.full_name} ({this.state.Team9.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team9.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team9.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team9.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team9.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team9.visitor_team.full_name} ({this.state.Team9.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team9.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team9.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team9.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team9.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>


            
            <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team10.date}</Moment> </h3>
              <p>{this.state.Team10.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team10.date}</Moment> ({this.state.Team10.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team10.home_team.full_name} ({this.state.Team10.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team10.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team10.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team10.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team10.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team10.visitor_team.full_name} ({this.state.Team10.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team10.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team10.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team10.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team10.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>


              
             <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team11.date}</Moment> </h3>
              <p>{this.state.Team11.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team11.date}</Moment> ({this.state.Team11.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team11.home_team.full_name} ({this.state.Team11.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team11.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team11.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team11.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team11.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team11.visitor_team.full_name} ({this.state.Team11.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team11.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team11.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team11.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team11.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>


              
             <div className="column"  onClick={()=>this.operation()}>
              <h3><Moment format="ddd, DD MMM YYYY">{this.state.Team12.date}</Moment> </h3>
              <p>{this.state.Team12.status}</p>
              {
                this.state.showMe?<div><div className="model" id="cls">
                <div className="content">
                    <center> <h1 className="hhd">Game Discription</h1>
                    <h4><Moment format="ddd, DD MMM YYYY">{this.state.Team12.date}</Moment> ({this.state.Team12.status})</h4></center>
                    
                    <div className="gameDetail"> 
                    <div className="home"><h2>Home Team</h2>
                        <p>{this.state.Team12.home_team.full_name} ({this.state.Team12.home_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team12.home_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team12.home_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team12.home_team.division}</p>
                        <p><b>Home team score:</b> {this.state.Team12.home_team_score}</p>       
                        </div>
                    <div className="visitor"><h2>Visitor Team</h2>
                         <p>{this.state.Team12.visitor_team.full_name} ({this.state.Team12.visitor_team.abbreviation})</p>
                        <p><b>City:</b> {this.state.Team12.visitor_team.city}</p>
                        <p><b>Conference:</b> {this.state.Team12.visitor_team.conference}</p>
                        <p><b>Division:</b> {this.state.Team12.visitor_team.division}</p>
                        <p><b>Visitor team score:</b> {this.state.Team12.visitor_team_score}</p>                        
                        </div>
                    </div>
               <center><button  onClick={()=>this.operation()} className="btn">Close</button></center>   
                    </div>         
                </div></div>:null
              }
            </div>





<div><button className="btnn">Previous</button><button className="btnn"> Next</button> </div>


          </div>
                  
          </div>:<div className="loading">Loading...</div>                
            }
           
           </div>
        );
    }


    async componentDidMount(){
        const url="https://www.balldontlie.io/api/v1/games?per_page=12";
        const res=await fetch(url);
        const response=await res.json();
        console.log(response);
        
        console.log(response.data[1]);
        
        this.setState({Team1:response.data[0],Team2:response.data[1],Team3:response.data[2],Team4:response.data[3],
          Team5:response.data[4],Team6:response.data[5],Team7:response.data[6],Team8:response.data[7],
          Team9:response.data[8],Team10:response.data[9],Team11:response.data[10],Team12:response.data[11],flag:true});
        
    }
}

export default Game;