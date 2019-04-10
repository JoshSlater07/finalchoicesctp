import React, { Component } from "react";
import "./rewards.css"
import Reward from "./positive-vote.png"
import Grid from '@material-ui/core/Grid';
import Time from "./002-time.png";
import Logo from "./logofinal.png";
import Back from "./back3.png";


class Rewards extends Component {
  render() {
    return (

      <div style=
      {{ height: "75vh",
      
    }} 
      className="dashboard">
        <div className="row">
          <div className="col-sm-12">
            <h1>
              Well Done! Schedule Complete!
           </h1>
           
            <br></br>
            <br></br>
            <br></br>

            <div className = "constants">
            
            <div className = "BackButton"></div>
            <a href = "Dashboard"
              style={{
              
              }}
             
            >
                   <img src = {Back} alt = "A schedule icon"
                    style = {{ 
                      
                      float: "left",
                      width: "90px",
                      height:"90px",
                      marginTop: "-100px",
                      letterSpacing: "0.1em;"
      
                    }}></img>
               
            </a>

            <div className = "HomeButton"></div>
            <a href = "Dashboard"
              style={{
              
              }}
             
            >
                   <img src = {Logo} alt = "A schedule icon"
                    style = {{ 
                   
                      float: "right",
                      width: "90px",
                      height:"90px",
                      marginTop: "-100px"
                      
      
                    }}></img>
               
            </a>
            
            </div>
            
           
           <div className = "dash" >
           
           <Grid container>
           <Grid item xs={12}>
            <a href = "Timelime"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "150px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
                   <img src = {Reward} alt = "A schedule icon"
                    style = {{ 
                      marginTop: "25px",
                      width: "200px",
                      height:"200px"
                      
      
                    }}></img>
               
            </a>
            <p>Back to Timelime</p>
            </Grid>
            

            </Grid>


            </div>

            

           
            
            
            
          
            </div>
          </div>
        </div>
     
    );
  }
}
export default Rewards;
