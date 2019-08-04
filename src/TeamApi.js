import React,{Component} from 'react'; 
import './App.css';

class TeamApi extends Component {
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
       Team13:null,
       Team14:null,
       Team15:null,
       Team16:null,
       Team17:null,
       Team18:null,
       Team19:null,
       Team20:null,
       Team21:null,
       Team22:null,
       Team23:null,
       Team24:null,
       Team25:null,
       Team26:null,
       Team27:null,
       Team28:null,
       Team29:null,
       Team30:null,

    }

 render(){
  return (

<div>
    
{this.state.flag?<div className="row">


<div className="column tooltip" >
  <h2>{this.state.Team1.name}</h2>
  <p>{this.state.Team1.division}</p> 
  <span className="tooltiptext"><p className="hover">{this.state.Team1.full_name} ({this.state.Team1.abbreviation})</p>
  <p>City: {this.state.Team1.city}<br/></p>
  <p>Conference: {this.state.Team1.conference}</p>

 <p> Division: {this.state.Team1.division}</p>
   <br/></span>
</div>
         

                <div className="column tooltip" >
                <h2>{this.state.Team2.name}</h2>
                <p>{this.state.Team2.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team2.full_name} ({this.state.Team2.abbreviation})</p>
  <p>City: {this.state.Team2.city}<br/></p><p>Conference: {this.state.Team2.conference}</p>
  <p>Division: {this.state.Team2.division}</p> <br/></span>
            </div>
  
            
            <div className="column tooltip" >
                <h2>{this.state.Team3.name}</h2>
                <p>{this.state.Team3.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team3.full_name} ({this.state.Team3.abbreviation})</p>
  <p>City: {this.state.Team3.city}<br/></p><p>Conference: {this.state.Team3.conference}</p>
  <p>Division: {this.state.Team3.division}</p> <br/></span>
            </div>

            
            <div className="column tooltip" >
                <h2>{this.state.Team4.name}</h2>
                <p>{this.state.Team4.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team4.full_name} ({this.state.Team4.abbreviation})</p>
  <p>City: {this.state.Team4.city}<br/></p><p>Conference: {this.state.Team4.conference}</p>
  <p> Division: {this.state.Team4.division}</p> <br/></span>
            </div>
            <div className="column tooltip" >
                <h2>{this.state.Team5.name}</h2>
                <p>{this.state.Team5.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team5.full_name} ({this.state.Team5.abbreviation})</p>
  <p>City: {this.state.Team5.city}<br/></p><p>Conference: {this.state.Team5.conference}</p>
  <p>Division: {this.state.Team5.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team6.name}</h2>
                <p>{this.state.Team6.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team6.full_name} ({this.state.Team6.abbreviation})</p>
  <p>City: {this.state.Team6.city}<br/></p><p>Conference: {this.state.Team6.conference}</p>
  <p>Division: {this.state.Team6.division}</p> <br/></span>
            </div>
            <div className="column tooltip" >
                <h2>{this.state.Team7.name}</h2>
                <p>{this.state.Team7.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team7.full_name} ({this.state.Team7.abbreviation})</p>
  <p>City: {this.state.Team7.city}<br/></p><p>Conference: {this.state.Team7.conference}</p>
  <p>Division: {this.state.Team7.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team8.name}</h2>
                <p>{this.state.Team8.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team8.full_name} ({this.state.Team8.abbreviation})</p>
  <p>City: {this.state.Team8.city}<br/></p><p>Conference: {this.state.Team8.conference}</p>
  <p>Division: {this.state.Team8.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team9.name}</h2>
                <p>{this.state.Team9.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team9.full_name} ({this.state.Team9.abbreviation})</p>
  <p>City: {this.state.Team9.city}<br/></p><p>Conference: {this.state.Team9.conference}</p>
  <p>Division: {this.state.Team9.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team10.name}</h2>
                <p>{this.state.Team10.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team10.full_name} ({this.state.Team10.abbreviation})</p>
  <p>City: {this.state.Team10.city}<br/></p><p>Conference: {this.state.Team10.conference}</p>
  <p>Division: {this.state.Team10.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team11.name}</h2>
                <p>{this.state.Team11.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team11.full_name} ({this.state.Team11.abbreviation})</p>
  <p>City: {this.state.Team11.city}<br/></p><p>Conference: {this.state.Team11.conference}</p>
  <p>Division: {this.state.Team11.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team12.name}</h2>
                <p>{this.state.Team12.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team12.full_name} ({this.state.Team12.abbreviation})</p>
  <p>City: {this.state.Team12.city}<br/></p><p>Conference: {this.state.Team12.conference}</p>
  <p>Division: {this.state.Team12.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team13.name}</h2>
                <p>{this.state.Team13.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team13.full_name} ({this.state.Team13.abbreviation})</p>
  <p>City: {this.state.Team13.city}<br/></p><p>Conference: {this.state.Team13.conference}</p>
  <p>Division: {this.state.Team13.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team14.name}</h2>
                <p>{this.state.Team14.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team14.full_name} ({this.state.Team14.abbreviation})</p>
  <p>City: {this.state.Team14.city}<br/></p><p>Conference: {this.state.Team14.conference}</p>
  <p>Division: {this.state.Team14.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team15.name}</h2>
                <p>{this.state.Team15.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team15.full_name} ({this.state.Team15.abbreviation})</p>
  <p>City: {this.state.Team15.city}<br/></p><p>Conference: {this.state.Team15.conference}</p>
  <p>Division: {this.state.Team15.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team16.name}</h2>
                <p>{this.state.Team16.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team16.full_name} ({this.state.Team16.abbreviation})</p>
  <p>City: {this.state.Team16.city}<br/></p><p>Conference: {this.state.Team16.conference}</p>
  <p>Division: {this.state.Team16.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team17.name}</h2>
                <p>{this.state.Team17.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team17.full_name} ({this.state.Team17.abbreviation})</p>
  <p>City: {this.state.Team17.city}<br/></p><p>Conference: {this.state.Team17.conference}</p>
  <p>Division: {this.state.Team17.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team18.name}</h2>
                <p>{this.state.Team18.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team18.full_name} ({this.state.Team18.abbreviation})</p>
  <p>City: {this.state.Team18.city}<br/></p><p>Conference: {this.state.Team18.conference}</p>
  <p>Division: {this.state.Team18.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team19.name}</h2>
                <p>{this.state.Team19.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team19.full_name} ({this.state.Team19.abbreviation})</p>
  <p>City: {this.state.Team19.city}<br/></p><p>Conference: {this.state.Team19.conference}</p>
  <p>Division: {this.state.Team19.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team20.name}</h2>
                <p>{this.state.Team20.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team20.full_name} ({this.state.Team20.abbreviation})</p>
  <p>City: {this.state.Team20.city}<br/></p><p>Conference: {this.state.Team20.conference}</p>
  <p>Division: {this.state.Team20.division}</p> <br/></span>
            </div>
            <div className="column tooltip" >
                <h2>{this.state.Team21.name}</h2>
                <p>{this.state.Team21.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team21.full_name} ({this.state.Team21.abbreviation})</p>
  <p>City: {this.state.Team21.city}<br/></p><p>Conference: {this.state.Team21.conference}</p>
  <p>Division: {this.state.Team21.division}</p> <br/></span>
            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team22.name}</h2>
                <p>{this.state.Team22.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team22.full_name} ({this.state.Team22.abbreviation})</p>
  <p>City: {this.state.Team22.city}<br/></p><p>Conference: {this.state.Team22.conference}</p>
  <p>Division: {this.state.Team22.division}</p> <br/></span>
            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team23.name}</h2>
                <p>{this.state.Team23.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team23.full_name} ({this.state.Team23.abbreviation})</p>
  <p>City: {this.state.Team23.city}<br/></p><p>Conference: {this.state.Team23.conference}</p>
  <p>Division: {this.state.Team23.division}</p> <br/></span>

            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team24.name}</h2>
                <p>{this.state.Team24.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team24.full_name} ({this.state.Team24.abbreviation})</p>
  <p>City: {this.state.Team24.city}<br/></p><p>Conference: {this.state.Team24.conference}</p>
  <p>Division: {this.state.Team24.division}</p> <br/></span>
            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team25.name}</h2>
                <p>{this.state.Team25.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team25.full_name} ({this.state.Team25.abbreviation})</p>
  <p>City: {this.state.Team25.city}<br/></p><p>Conference: {this.state.Team25.conference}</p>
  <p>Division: {this.state.Team25.division}</p> <br/></span>
            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team26.name}</h2>
                <p>{this.state.Team26.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team26.full_name} ({this.state.Team26.abbreviation})</p>
  <p>City: {this.state.Team26.city}<br/></p><p>Conference: {this.state.Team26.conference}</p>
  <p>Division: {this.state.Team26.division}</p> <br/></span>
            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team27.name}</h2>
                <p>{this.state.Team27.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team27.full_name} ({this.state.Team27.abbreviation})</p>
  <p>City: {this.state.Team27.city}<br/></p><p>Conference: {this.state.Team27.conference}</p>
  <p>Division: {this.state.Team27.division}</p> <br/></span>
            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team28.name}</h2>
                <p>{this.state.Team28.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team28.full_name} ({this.state.Team28.abbreviation})</p>
  <p>City: {this.state.Team28.city}<br/></p><p>Conference: {this.state.Team28.conference}</p>
  <p>Division: {this.state.Team28.division}</p> <br/></span>
            </div>
            
            <div className="column tooltip" >
                <h2>{this.state.Team29.name}</h2>
                <p>{this.state.Team29.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team29.full_name} ({this.state.Team29.abbreviation})</p>
  <p>City: {this.state.Team29.city}<br/></p><p>Conference: {this.state.Team29.conference}</p>
  <p>Division: {this.state.Team29.division}</p> <br/></span>
            </div>

            <div className="column tooltip" >
                <h2>{this.state.Team30.name}</h2>
                <p>{this.state.Team30.division}</p>
                <span className="tooltiptext"><p className="hover">{this.state.Team30.full_name} ({this.state.Team30.abbreviation})</p>
  <p>City: {this.state.Team30.city}<br/></p><p>Conference: {this.state.Team30.conference}</p>
  <p>Division: {this.state.Team30.division}</p> <br/></span>
            </div>
            
            </div>:<div className="loading">Loading...</div> 

  }
</div>
    );
}

async componentDidMount(){
    const url="https://www.balldontlie.io/api/v1/teams";
    const res=await fetch(url);
    const response=await res.json();
   // console.log(response);
    this.setState({Team1: response.data[0],
        Team2: response.data[1],Team3: response.data[2],Team4: response.data[3],
        Team5: response.data[4],Team6: response.data[5],Team7: response.data[6],
        Team8: response.data[7],Team9: response.data[8],Team10: response.data[9],
        Team11: response.data[10],Team12: response.data[11],Team13: response.data[12],
        Team14: response.data[13],Team15: response.data[14],Team16: response.data[15],
        Team17: response.data[16],Team18: response.data[17],Team19: response.data[18],
        Team20: response.data[19],Team21: response.data[20],Team22: response.data[21],
        Team23: response.data[22],Team24: response.data[23],Team25: response.data[24],
        Team26: response.data[25],Team27: response.data[26],Team28: response.data[27],
        Team29: response.data[28],Team30: response.data[29],flag:true});

}

}

export default TeamApi;