import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import image from './Q1.png'

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <img src={image}/>
      <Field
        name="a"
        type="text"
        component={renderField}
    
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)