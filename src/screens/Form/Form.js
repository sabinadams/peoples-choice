import React, { useState } from 'react'
import _ from 'lodash';
import { withFirebase } from '../../Firebase'
import './Form.scss'

import Loading from '../Loading/Loading'
import FormItem from '../../components/FormItem/FormItem'

function Form(props) {
    // Alert message text for when a user messes up
    const [ alertMessage, setAlertMessage ] = useState('')
    // There will only ever be 3 answers at most
    const [ answers, setAnswers ] = useState([null, null, null])
    // Just a key mapping for language values
    const optionNumbers = ['First', 'Second', 'Third']

    // Update an answer
    const changeAnswer = ( index, id, points ) => {
        setAnswers( prevState => {
            let newState = [...prevState]
            newState[index] = { id, points }
            return newState
        } )
    }
    
    // Shows an alert message for 3 seconds
    const alertUser = message => {
        setAlertMessage(message)
        setTimeout(() => setAlertMessage(''), 3000)
    }

    // Saves the user's answer
    const handleSubmit = () => {
        let 
            // The user's answers, we take out the nulls, which represent a question slot we didn't need because there could be less than 3 options
            userAnswers = _.without( answers, null ),
            // The amount of fields. There can only be up to 3 fields
            fieldCount = _.keys(props.question.options).length <= 3 ? _.keys(props.question.options).length : 3,
            // Did the user choose an option in each field?
            allChosen = userAnswers.length === fieldCount,
            // Did the user choose the same option in 2 or more fields?
            noDuplicates = _.uniqBy(userAnswers, 'id').length === userAnswers.length


        // User didn't choose an option in each field
        if ( !allChosen ) 
            return alertUser('Please choose an options in each of the fields...')
        
        // User chose duplicate answers
        if ( !noDuplicates ) 
            return alertUser('Please choose different answers in each field...')
        
        // Get the answer options in the form we want
        let finalOptions = {}
        userAnswers.map( answer => finalOptions[answer.id] = answer.points )

        // Save the entire answer object to the DB. 
        // Saving this should automatically update the AppContainer's 'hasAnswered' and send us to the home page
        props.firebase.answers().add({
            options: finalOptions,
            questionID: props.question.id,
            userID: props.firebase.auth.currentUser.uid
        })
    }

	return props.question ? (
        <div id="formPage">
            <h2 className="question">{props.question.message}</h2>
            <hr className="divider"/>
            <div className="formContainer">
                {
                    _.times(
                        // Only generate up to 3 form fields. If there are less than 3 options, generate that amount of fields
                        _.keys(props.question.options).length <= 3 ? _.keys(props.question.options).length : 3,
                        index => (
                            <FormItem 
                                key={index} 
                                answerIndex={index}
                                // Points should be descending following the amount of fields
                                points={ (_.keys(props.question.options).length <= 3 ? _.keys(props.question.options).length : 3 ) - index} 
                                // Get the numeric language (e.g. First)
                                message={optionNumbers[index]}
                                onChange={changeAnswer}
                                chosenAnswer={answers[index] ? answers[index].id : 'no_value'}
                                options={props.question.options}
                            />
                        )
                    )
                }
            </div>
            <hr className="divider"/>
            <p className="alertMessage">{ alertMessage.length ? alertMessage : null}</p>
            <button onClick={() => handleSubmit()} className="submitButton">Vote</button>
		</div>
	) : <Loading message="Loading Question"/>
}

export default withFirebase(Form);