import React, { Component } from "react";
import "./Landing.css";
import Logo from "./logofinal.png"
import { logoutUser } from "../../actions/authActions";
import Background from "./tempalte.jpg";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import {landingContainer, landingImage, dialogContainer} from "../../style"


class Landing extends Component {
  render() {
    return (

      <div style={landingContainer}>

        <img style={landingImage} src={Background}/>

        <Dialog
          open={true}
        >
          <DialogTitle>
          <Typography variant="h4" align="center">
            C H O I C E S
          </Typography>
          </DialogTitle>
          <DialogContent>

            <div style={dialogContainer}>

              <Typography variant="subtitle1" align="center" gutterBottom>
              Please login below or register if it's your first time here!
              </Typography>

              <br/>

              <Grid container spacing={32}>
                <Grid item xs={6}>
                  <Button fullWidth={true} size="large" variant="outlined" href="Register">Register</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth={true} size="large" variant="outlined" href="login">Log In</Button>
                </Grid>
              </Grid>

              </div>

          </DialogContent>
        </Dialog>

      </div>
    //   <section className = "contain">
      
    //   <div style={{ 
    //     height: "150vh",
    //     backgroundImage: `url(${Background})`
    // }} className="container-fluid step-body">
        
    //     <div className="row-large-12">
    //       <div className="col-large-12">
            
    //         <div className = "landingContent">
    //         <div className = "formDesign">


    //         <div className = "logo"> 
        
    //     <img className = "logo" src = {Logo} alt = "Choices Logo"
    //                 style = {{ 
                   
    //                   width: "100px",
    //                   height: "100px",
    //                   marginTop: "-200px"
                   
                    
                      
      
    //                 }}></img>
    //                 </div>
                   
    //         <h1 className = "heading">
             
    //           <span style={{ fontFamily: "Helvetica", fontSize: "60px" }}>C H O I C E S</span> 
            
    //         </h1>
    //         </div>
           
          

    //                 <br />
    //                 <br />

          
    //         <h6><span style={{ fontFamily: "Helvetica" }}>Please login below or register if it's your first time here!</span></h6> 
    //         <br />

    //         <br />

            
    //         <a href = "Register"
    //           style={{
    //             width: "150px",
    //             borderRadius: "3px",
    //             letterSpacing: "1.5px"
    //           }}
    //           className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //         >
    //           Register
    //         </a>
    //         <a href = "login"
    //           style={{
    //             marginLeft: "2rem",
    //             width: "150px",
    //             borderRadius: "3px",
    //             letterSpacing: "1.5px"
    //           }}
    //           className="btn btn-large waves-effect white hoverable black-text"
    //         >
    //           Log In
    //         </a>
    //         </div>
        
    //         </div>
    //       </div>
    //       </div>
    //       </section>
      
    );
  }
}
export default Landing;
