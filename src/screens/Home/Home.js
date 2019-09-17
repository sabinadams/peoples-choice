import React, { useState, useEffect } from 'react'
import { withFirebase } from '../../Firebase'
import _ from 'lodash'
import './Home.scss';

function Home(props) {
	// Holds the user's answers
	const [ userAnswers, setUserAnswers ] = useState([])
	// Holds the answer counts for all users
	const [ optionCount, setOptionCount ] = useState({})

	useEffect( () => {
		// Get the users' answers
		props.firebase
			.questionAnswers(props.question.id)
			.onSnapshot( snapshot => {
				// Set up answer option count object
				let countObject = {}

				// Propogate it with the keys for each option and initialize to 0
				_.keys(props.question.options).map( key => countObject[key] = 0)

				// For each answer record, get the data
				snapshot.forEach( doc => {
					let data = doc.data()
					// If this was the current user's answer, save it in the userAnswers slot
					if ( data.userID === props.firebase.auth.currentUser.uid )
						setUserAnswers(data.options)
					// Take each option this user chose and add its point value to the accumulative option count object
					_.keys(data.options).map( key => countObject[key] += data.options[key])
				})

				// Save the count object
				setOptionCount(countObject)
			})
	}, [props.firebase, props.question])

	return (
        <div>
			<button onClick={() => {console.log(userAnswers, optionCount);}}>Test</button>
		</div>
	)
}

export default withFirebase(Home);