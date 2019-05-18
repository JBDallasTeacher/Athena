<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home"

import "./App.css";
import ProductList from "./components/product-list/ProductList";
import ProductDetails from "./components/product-details/ProductDetails";
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
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />\
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
=======
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


>>>>>>> master
