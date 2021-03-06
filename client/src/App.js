import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

//import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Schedule from "./components/schedule/Schedule";
import Time from "./components/timeline/Time";
import Account from"./components/account/Account";
import Preferences from"./components/preferences/Preferences";
import Rewards from "./components/rewards/Rewards";

import { SketchPicker } from 'react-color';




import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }

  



  render() {
    return (
      
      <Provider store={store}>
        <Router>
          <div className="App">

          <div className = "colourPicker">
         

      
      </div>
          
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/schedule" component={Schedule}/>
              <PrivateRoute exact path="/timeline" component={Time}/>
              <PrivateRoute exact path="/account" component={Account}/>
              <PrivateRoute exact path="/preferences" component={Preferences}/>
              <PrivateRoute exact path="/rewards" component={Rewards}/>
              
            </Switch>
          </div>
        </Router>
      </Provider>

      
    );
  }
}
export default App;
