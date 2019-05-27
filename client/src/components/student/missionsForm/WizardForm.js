import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import WizardFormFourthPage from './WizardFormFourthPage'
import WizardFormFifthPage from './WizardFormFifthPage'
import WizardFormSixthPage from './WizardFormSixthPage'
import WizardFormSeventhPage from './WizardFormSeventhPage'
import WizardFormEigthPage from './WizardFormEigthPage'
import WizardFormNinePage from './WizardFormNinePage'
import WizardFormTenthPage from './WizardFormTenthPage'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const {mission} = this.props
    const q = mission.missionQuestions
   
    const questions = q.map(q1=>  Object.values(q1))
    console.log(questions)
    console.log(questions[0][1])
    const q1 = questions[0][1];
    const q2 = questions[1][1];
    const q3 = questions[2][1];
    const q4 = questions[3][1];
    const q5 = questions[4][1];
    const q6 = questions[5][1];
    const q7 = questions[6][1];
    const q8 = questions[7][1];
    const q9 = questions[8][1];
    const q10 = questions[9][1];

    const id1 = questions[0][0];
    const id2 = questions[1][0];
    const id3 = questions[2][0];
    const id4 = questions[3][0];
    const id5 = questions[4][0];
    const id6 = questions[5][0];
    const id7 = questions[6][0];
    const id8 = questions[7][0];
    const id9 = questions[8][0];
    const id10 = questions[9][0];
  







    const { page } = this.state
    return (
      <div>

        {page === 1 && <WizardFormFirstPage id={id1} q={q1}onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            id={id2} q={q2}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            id={id3} q={q3}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <WizardFormFourthPage
            id={id4} q={q4}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <WizardFormFifthPage
          id={id5} q={q5}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
           {page === 6 && (
          <WizardFormSixthPage
          id={id6} q={q6}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
         {page === 7 && (
          <WizardFormSeventhPage
          id={id7} q={q7}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
         {page === 8 && (
          <WizardFormEigthPage
          id={id8} q={q8}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
          {page === 9 && (
          <WizardFormNinePage
          id={id9} q={q9}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
            {page === 10 && (
          <WizardFormTenthPage
          id={id10} q={q10}
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm