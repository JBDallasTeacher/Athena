import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "75vh",
          backgroundColor: "#bdd4e7",
          backgroundImage: "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)"
        }}
        className="container valign-wrapper"
      >
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Athena</b>
              <span style={{ fontFamily: "monospace" }} />
            </h4>
            <p className="flow-text grey-text text-darken-1">
              STUDENT SKILL TEST SYSTEM
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Teachers
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/studentslogin"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable green accent-3"
              >
                Students
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
