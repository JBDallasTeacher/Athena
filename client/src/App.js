import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "./component/NavBar";
import teacherPanel from "./component/pages/teacherPanel";
import home from "./component/pages/home";
import student from "./component/pages/student";
import './App.css';
/*
import home from "./component/pages/home.js";
import warmup from "./component/pages/warmup.js";
import instruction from "./component/pages/instruction.js";
import practice from "./component/pages/practice.js";
import test from "./component/pages/test.js";*/

function App() {
  return (
    <Router>
      <div className="background">
        <NavBar />
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path="/teacherPanel" component={teacherPanel} />
          <Route exact path="/student" component={student} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


