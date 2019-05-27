import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import image from './Q9.png'


const WizardFormNinePage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
            <img src={image}/>
      <Field name="a"  component={renderField} />
      <div>
        <div>
        
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormNinePage)