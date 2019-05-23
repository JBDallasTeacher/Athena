import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StudentForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="name" component={this.renderInput} label="Enter Student Name" />
        <Field name="email" component={this.renderInput} label="Enter Student Email" />
        <Field name="password" component={this.renderInput} label="Enter Student Password" />
        <Field name="password2" component={this.renderInput} label="Confirm Student Password" />
        <Field name="studentID" component={this.renderInput} label="Enter Student ID" />
        <Field name="studentClass" component={this.renderInput} label="Enter Student Class" />
        <Field name="studentAdress" component={this.renderInput} label="Enter Student Adress" />
        <Field name="role" component={this.renderInput} label="Enter Student Role" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    //only ran if the use did not enter the value
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description!';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StudentForm);