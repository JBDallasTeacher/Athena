import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";

import Home from './component/pages/Home';
import Student from './component/pages/student';
// import Login from './component/auth/Login';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" exact={true} component={Home} />
            <Route exact path="/student" exact={true} component={Student} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
