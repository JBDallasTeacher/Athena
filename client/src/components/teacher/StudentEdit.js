import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import {fetchStudent, editStudent} from '../../actions/studentsActions';
import StudentForm from '../teacher/StudentsForm';

class StudentEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStudent(this.props.match.params.id)
  }

  onSubmit = formValues =>{
    this.props.editStudent(this.props.match.params.id, formValues)
  }
  render() {
    if(!this.props.student){
      return <div>...loading</div>
    }
    return (
      <div>
        <StudentForm initialValues={_.pick(this.props.student, 'name', 'email',  'studentID', 'studentClass', 'studentAddress', 'role')} onSubmit={this.onSubmit}></StudentForm>
      </div>
    )
  }
}  

const mapStateToProps = (state, ownProps)=>{
  return {student: state.students[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStudent, editStudent})(StudentEdit);