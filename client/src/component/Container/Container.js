import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import home from '../pages/home.js'
import teacherPanel from '../pages/teacherPanel.js'
import student from '../pages/student.js'

class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/Teacher' component={teacherPanel}/>
          <Route path='/Student' component={student}/>
         
        </Switch>
      </div>
    );
  }
}

export default Container;