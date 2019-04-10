import React, { Component } from "react";
import BackButton from "./back2.png";
import Logo from "./logofinal.png";
import Preference from "./001-system.png";
import "./preferences.css"

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CirclePicker } from 'react-color';

class Preferences extends Component {
  render() {
    
    return (

      
      <div style=
      {{ height: "75vh",
      
    }} 
      className="dashboard">
        <div className="row">
          <div className="col-sm-12">
            <h1>
             Preferences
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
                   <img src = {BackButton} alt = "A schedule icon"
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
           
           <section>
            
              <div className = "theme" style={{
                width: "200px",
                height: "200px",
                borderRadius: "100px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
                   <img src = {Preference} alt = "A schedule icon"
                    style = {{ 
                      marginTop: "25px",
                      width: "180px",
                      height:"180px"
                      
      
                    }}></img>
                    </div>
               
            
                    <Paper elevation={2} style={{padding:25}}>

                      <Typography align="left" variant="subtitle1" gutterBottom><strong>Font Size:</strong></Typography>
                      <Grid container spacing={32}>
                      <Grid item xs={4}>
                      <Button variant="outlined">Small</Button>
                      </Grid>
                      <Grid item xs={4}>
                      <Button variant="outlined">Medium</Button>
                      </Grid>
                      <Grid item xs={4}>
                      <Button variant="outlined">Large</Button>
                      </Grid>
                      </Grid>

                      <br/><br/>

                      <Typography align="left" variant="subtitle1" gutterBottom><strong>Font Colour:</strong></Typography>
                      <CirclePicker/>

                    </Paper>
            </section>





            </div>

            

           
            
            
            
          
            </div>
          </div>
        </div>
     
    );
  }
}
export default Preferences;
