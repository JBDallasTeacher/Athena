
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudent, deleteStudent } from '../../actions/studentsActions';
import Modal from '../../Modal';
import history from '../../history';

class StudentDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStudent(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/tdashboard" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.student) {
      return 'Are you sure you want to delete this student?';
    }
    return `Are you sure you want to delete this student with name: ${
      this.props.student.name
    }`;
  }
  render() {
    return (
      <Modal
        title="Delete Student"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/tdashboard')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { student: state.students[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStudent, deleteStudent  }
)(StudentDelete)