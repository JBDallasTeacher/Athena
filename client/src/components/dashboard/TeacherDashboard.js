import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {fetchStudents} from "../../actions/studentsActions";
import {Link} from 'react-router-dom';

class Dashboard extends Component {
componentDidMount(){
this.props.fetchStudents();
}

renderList(){
    return this.props.students.map(function(student){
        return <h1>{student.name}</h1>
})
    
}

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
{this.renderList()}
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a Athena Page{" "}
                <span style={{ fontFamily: "monospace" }}>ATHENA</span> app 👏
              </p>
            </h4>
            <Link to='/tdashboard/new'>Register a Student</Link>
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
