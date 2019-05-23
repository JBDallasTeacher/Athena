import React from 'react';
import {connect} from 'react-redux';
import {createStudent} from '../../actions/studentsActions';
import StudentForm from './StudentsForm';

class StudentCreate extends React.Component {
    onSubmit = (formValues)=>{
this.props.createStudent(formValues)
    }
    render(){
        return(
<div>
    <h3>Register a Student</h3>
    <StudentForm onSubmit={this.onSubmit}/>
</div>
        )
    }
}

export default connect(null, {createStudent})(StudentCreate)