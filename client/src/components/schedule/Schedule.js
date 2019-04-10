import React, { Component } from "react";
import "./schedule.css"
import ScheduleIcon from "./timeedit.png"
import Time from "./002-time.png";
import Logo from "./logofinal.png";
import Back from "./back3.png";

import Grid from '@material-ui/core/Grid';


class Schedule extends Component {
  render() {
    return (

      <div style=
      {{ height: "75vh",
      
    }} 
      className="dashboard">
        <div className="row">
          <div className="col-sm-12">
            <h1>
              Schedule Viewer
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
           <Grid item xs={12} sm={6}>
            <a href = "Timeline"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
                   <img src = {Time} alt = "A schedule icon"
                    style = {{ 
                      marginTop: "25px",
                      width: "120px",
                      height:"120px"
                      
      
                    }}></img>
               
            </a>
            <p>View Schedule</p>
            </Grid>
            <Grid item xs={12} sm={6}>
            <a href = "Timeline"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
              <img src = {ScheduleIcon} alt = "A family icon" 
              style = {{ 
                marginTop: "25px",
                width: "120px",
                height:"120px"

              }}></img>
            </a>
            <p>Edit Schedule</p>
            </Grid>

            </Grid>


            </div>

            

           
            
            
            
          
            </div>
          </div>
        </div>
     
    );
  }
}
export default Schedule;
