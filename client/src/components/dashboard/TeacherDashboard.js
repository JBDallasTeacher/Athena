import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { fetchStudents } from "../../actions/studentsActions";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  renderAdmin(student) {
    const { id } = this.props.auth.user;
    const teacherID = student.teacherID;
    const _id = student._id;
    if (teacherID === id) {
      return (
        <div className="card">
          <div className="card-content">
            <h5 className="card-title">{student.name}</h5>
            <p>Student Id: {student.studentID}</p>
            <div className="card-action">
              <Link
                to={`/tdashboard/edit/${_id}`}
                className="btn btn-large waves-effect waves-light hoverable gray accent-3"
              >
                Edit
              </Link>
              <Link
                to={`/tdashboard/delete/${_id}`}
                className="btn btn-large waves-effect waves-light hoverable red accent-3"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  renderList() {
    return this.props.students.map(student => {
      return <div key={student._id}>{this.renderAdmin(student)}</div>;
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh", marginTop: "70px" }} className="container">
        <div className="row">
          <div className="col s5">
            <b>Wellcome  {user.name.split(" ")[0]}</b>
            <p>You are logged into ATHENA app</p>
            <Link to="/tdashboard/new" style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}>Register a Student</Link>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
          <div className="col s1"/>
          <div className="col s6">
          {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  students: Object.values(state.students)
});

export default connect(
  mapStateToProps,
  { logoutUser, fetchStudents }
)(Dashboard);
