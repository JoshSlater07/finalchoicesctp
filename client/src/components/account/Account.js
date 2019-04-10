import React, { Component } from "react";
import BackButton from "./back2.png";
import Logo from "./logofinal.png";
import Profile from "./003-family.png";
import "./account.css";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Account extends Component {
  render() {
    
    return (

      
      <div style=
      {{ height: "75vh",
      
    }} 
      className="dashboard">
        <div className="row">
          <div className="col-sm-12">
            <h1>
              Account Settings
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
                   <img src = {Profile} alt = "A schedule icon"
                    style = {{ 
                      marginTop: "25px",
                      width: "180px",
                      height:"180px"
                      
      
                    }}></img>
                    </div>

                    <Button style={{position:"absolute"}} variant="outlined">Edit Img</Button>
               
            <Paper elevation={2} style={{padding:25}}>

            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>

            </Paper>
            
            </section>





            </div>

            

           
            
            
            
          
            </div>
          </div>
        </div>
     
    );
  }
}
export default Account;
