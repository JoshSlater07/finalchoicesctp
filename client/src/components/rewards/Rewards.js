import React, { Component } from "react";
import "./rewards.css"
import ScheduleIcon from "./timeedit.png"
import Time from "./002-time.png";



class Rewards extends Component {
  render() {
    return (

      <div style=
      {{ height: "75vh",
      
    }} 
      className="col-sm-12">
        <div className="row">
          <div className=" schedule col-sm-12">
<div className = "scheduleTitle">
          <h4>
              <b>Choices - An Interactive Visual Schedule</b>
              <br/>
              <br/>
            

            </h4>
            </div>

            <br />
        
             <div className = "ViewSchedule">

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
            <p>View Schedule</p>

            </div>

            <div className = "EditSchedule">

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
            </div>
           
            </div>
            </div>
            </div>
    );
  }
}
export default Rewards;
