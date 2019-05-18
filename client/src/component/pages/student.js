import React, { Component } from 'react';
//import loggin from './loggin'
//import warmup from './warmup'
import Login from '../loginForm/Login.js'

class student extends Component {
    render() {
        return (
            <div>
                <Login />
                <h1>This is student page.</h1>
                <h2>A loggin screen should show up</h2>
            </div>


        );
    }
}

export default student;