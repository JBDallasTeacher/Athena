import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import history from './history';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import LoginStudents from "./components/auth/LoginStudents";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import TeacherDashboard from "./components/dashboard/TeacherDashboard";
import Home from "./components/home/Home";
import StudentCreate from './components/teacher/StudentCreate';
import StudentEdit from './components/teacher/StudentEdit';
import StudentDelete from './components/teacher/StudentDelete';
import StudentShow from './components/teacher/StudentShow';

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
        <Router history={history}>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/studentslogin" component={LoginStudents} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/tdashboard" component={TeacherDashboard} />
              <PrivateRoute exact path="/tdashboard/new" component={StudentCreate} />
              <PrivateRoute exact path="/tdashboard/edit/:id" component={StudentEdit} />
              <PrivateRoute exact path="/tdashboard/delete/:id" component={StudentDelete} />
              <PrivateRoute exact path="/tdashboard/:id" component={StudentShow} />
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
