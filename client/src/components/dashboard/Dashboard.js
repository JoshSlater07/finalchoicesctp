import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Time from "./002-time.png";
import Family from "./003-family.png";
import Options from "./001-system.png";

import Grid from '@material-ui/core/Grid';

import "./Dashboard.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

   

//fetchs the user from authentication, bringing in the information stored from that account.
  render() {
    const { user } = this.props.auth;

    return (

      
      <div style=
      {{ height: "75vh",
      
    }} 
      className="dashboard">
        <div className="row">
          <div className="col-sm-12">

          <div className = "heading" 
          style = {{
            fontSize: "100px"
          }}>
            <h1 className = "heading">
              C H O I C E S
              <br/>
              
            

            </h1>

            
            </div>

            <p><i>
            an interactive visual schedule
            </i>
            </p>

            <br />
            <br />
            <h4>

             


            Welcome to your dashboard, {user.name.split(" ")[0]}!

            </h4>

           
            <br></br>
            <br></br>
            <br></br>
            
           
           <div className = "dash" >

           <Grid container spacing={32}>
           
           <Grid item xs={12} sm={4}>
            <a href = "Schedule"
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
            <p>Schedule</p>
            </Grid>

            <Grid item xs={12} sm={4}>
            <a href = "Account"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
              <img src = {Family} alt = "A family icon" 
              style = {{ 
                marginTop: "25px",
                width: "120px",
                height:"120px"

              }}></img>
            </a>
            <p>Account</p>
            </Grid>

            <Grid item xs={12} sm={4}>
            <a href = "Preferences"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "75px",
                margin: "25px",
                letterSpacing: "1px"
              }}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
              <img src = {Options} alt = "An options icon" 
              style = {{ 
               
                marginTop: "25px",
                width: "120px",
                height:"120px"
                

              }}></img>
            </a>
            <p>Preferences</p>
            </Grid>

            </Grid>


            </div>

            

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
            
            
            <button className ="buttonStyle"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                margin: "10px",
                color: "#D83D3D;"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable white accent-3"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
     
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
