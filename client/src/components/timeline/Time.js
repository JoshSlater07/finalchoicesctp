import React, { Component, Fragment } from 'react';
import { HuePicker } from 'react-color';
import './Time.css';
import { Steps } from 'antd';
import { Icon } from 'antd';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Logo from "./logofinal.png";
import BackButton from "./back2.png"
import posed from 'react-pose';
import { connect } from 'react-redux';
//library used for previous user authentication, allowing in this case for users to store each timelime object.
import axios from "axios";






// creates a constant for 'Steps'. This is used throughout the creation of the timeline.
const Step = Steps.Step;

  class Time extends Component {

   

    constructor(props){
    super(props)


    this.state={
     //ensures the modal is not active on the creation of each timeline. 
      modal:false,
      //the timelime is in an array, which links to the addTimeline feature later in the code. This means the user will start with a blank template unless events have already been previously stored.
      timelines:[]
    }

  console.log(this.state);
  
 this.toggle = this.toggle.bind(this);

  }


//this throws out the GET request using axios, retrieving the timeline data stored using the backend. Once retrieved, it sets the state of the timelime object to whatever has been stored previously.
componentDidMount(){
  axios.get(`api/timelines/${this.props.user.id}`)
  .then(({ data })=> {
    this.setState({
      timelines: data.timelines
    })
  })
}

//similar to above, this uses axios again, but this time, posts the data stored in the timeline. This links to the function above so that the user can easily send/retireve their entries.
postData = (data) => {
  return axios.post("/api/timelines", {timeline: data})
}


drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  //the main drop event. 
  drop(ev,id,second) {
    ev.preventDefault();
    let timelines =this.state.timelines
  timelines=timelines.map((timeline)=>{
    console.log("===timeline", timeline._id === id, id)
    if(timeline._id===id){
      if(second===true){
        return {
          ...timeline,
          completed:false
        }
      }
      return {
        ...timeline,
        completed:true
      }
    }
    return timeline
  })
  this.setState({timelines})
  }



  allowDrop(ev) {
    ev.preventDefault();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  //the main element for adding the timelime state. This allows users to add an event to the timeline, linking to the backend schema. This also features 'user.id', which relates to the ID given to the user during registration.
  addTimeline = () =>{
    let timelines = this.state.timelines
    let newtimeline ={ id: timelines._id, time:this.time.value, completed: false, url:this.image.value,  userId: this.props.user.id}
    console.log(newtimeline, this.props.user)
    //this posts the new timeline entry onto the database. Then onResponse (res), pushes the new timelime state.
    this.postData(newtimeline)
    .then((res)=> {
      timelines.push(res.data.timeline)
      this.setState({timelines,modal:false})
    })
    .catch((e)=> {
      console.log(e.message)
    })
  }



  //a key feature for the timeline for UX purposes. This is a simple feature allowing users to delete entries from the timeline/database in case of error.
  deleteTimeline = (timelineId) => {
    axios.delete(`api/timelines/${timelineId}`)
    .then(() => {
      this.setState({
        timelines: this.state.timelines.filter((timeline) => timeline._id !== timelineId)
      })
    })
  }
  


  render() {
    return (
      <div className="timeline">
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Add To-Do Event</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input
          innerRef={(node) => this.time = node}
            type="time"
            name="time"
            id="exampleTime"
            placeholder="time placeholder"
          />
              </FormGroup>
        
        <FormGroup>
          <Label for="exampleFile">Image Url</Label >
          <Input innerRef={(node) => this.image = node} type="text" name="file" id="exampleFile" />
          <FormText color="muted">.
          </FormText>
        </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.addTimeline()}}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>


        
    
<div className = "generalTitle">



        <div className = "header"><h1>Schedule</h1></div>

            </div>


<div className = "instructionsContainer">

<div className = "BackButton"></div>
            <a href = "Schedule"
              style={{
              
              }}
             
            >
                   <img src = {BackButton} alt = "A schedule icon"
                    style = {{ 
                      
                      float: "left",
                      width: "90px",
                      height:"90px",
                      marginTop: "30px"
                      
      
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
                      marginTop: "30px"
                      
      
                    }}></img>
               
            </a>
        <div className = "instructions"><p>Use the schedule below by dragging the image on the left to the container on the right.</p></div>
        <div className = "instructions2"><p>Use the schedule below by clicking the ‘+’ button. Enter your custom time and select an image via URL.</p></div>
   
        

        </div>
       
                    

           
           <div className = "taskList">
           <div className = "todo"><h4>To-Do</h4></div>
           <div className = "complete"><h4>Complete</h4></div>
           
           </div>
 
                 

                    
      <div className="container-fluid step-body">
         <div className="row hello-world">
            <div className="col-sm-12">
            <div className="vertical-pill">
                <div className="stepper-container vertical">
             
                <div className="stepper">
        
                <div className="step">
                    { this.state.timelines.length === 0 && (
                    <div className="timestamp">
                    <div className="step-inner">
                        <div className="step-circle-black"></div>
                        <div className="vertical-line"></div>
                        <div className="step ">

                          <div onClick={()=>{this.setState({modal:true})}} className="step-inner">
                              <div className="step-circle">+</div>
                          </div>
                        </div>
                    </div>
                    </div>
                    )}
                    <div className="step-content">
                    
                    </div>
                </div>
              
                { this.state.timelines.map((timeline, id)=> {
                  console.clear()
                  console.log("TIMELINE: ", this.state.timelines.length)
                    return (
                    <Fragment>
                    <section className="task">

                    { timeline.completed?( <>
                      <div onDrop={(e)=>{this.drop(e,timeline._id,true)}} onDragOver={(ev)=>{this.allowDrop(ev)}} className="left-img-incomplete"></div>
                    </>):(
                      <>
                      <div onDragStart={(e)=>{this.drag(e)}} className="left-img"><img draggable src={timeline.url} height="170" width="200"/></div>
                    </>)}

                    <div className="timestamp">                   
                    { id === 0 &&
                      <div className="step-circle-black"></div>
                    }
                    <div className="vertical-line"></div>
                    <div className="step" key={id}>
                      <div className="step-inner">
                          <div className="step-circle">{timeline.time}</div>
                      </div>
                    </div>
                    </div> 
                      
                    {/* <div className="step-content"> */}
                    
                    
                    { timeline.completed?(
                      <section className="edit-task">
                        <div onDragStart={(e)=>{this.drag(e)}}  className="right-img-complete"><img draggable src={timeline.url} height="170" width="200"/></div>
                        <button className = "deleteButton" onClick={() => this.deleteTimeline(timeline._id)}>Delete</button>
                      </section>
                    ):(
                      <section className="edit-task">
                      <div onDrop={(e)=>{this.drop(e,timeline._id)}} onDragOver={(ev)=>{this.allowDrop(ev)}} className="right-img"></div>
                      <button className = "deleteButton" onClick={() => this.deleteTimeline(timeline._id)}>Delete</button>
                      </section>
                    )}

                    {/* </div> */}
                    </section>
                    { id === this.state.timelines.length -1 && (
                      <div className="timestamp">   
                        <div className="vertical-line"></div>
                        <div className="step" key={id}></div>
                        <div onClick={()=>{this.setState({modal:true})}} className="step-inner">
                          <div className="step-circle">+</div>
                        </div>
                      </div>
                    )}
                    </Fragment>
                    )})}
                
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

<div className = "rewards">
<a href = "/rewards">
<button
style={{
  width: "150px",
  borderRadius: "3px",
  letterSpacing: "1.5px",
  marginTop: "1rem",
  margin: "10px"
}}
className="btn btn-large waves-effect waves-light hoverable red accent-3"
>
Timelime Complete!
</button>
</a>
</div>

      </div>

    );
  }
  }


  const mapStateToProps = (state) => {
    return {
      user: state.auth.user
    }
  }

export default connect(mapStateToProps)(Time);
