import React, { useState, useEffect } from 'react'
import { withFirebase } from '../../Firebase'
import Loading from '../Loading/Loading'
import _ from 'lodash'
import './Results.scss';
import AnswerRow from '../../components/AnswerRow/AnswerRow'
function Results(props) {
	// Holds the user's answers
	const [ userAnswers, setUserAnswers ] = useState([])
	// Holds the answer counts for all users
	const [ optionCount, setOptionCount ] = useState()

	useEffect( () => {
		// Get the users' answers
		let unsubscribe = props.firebase
			.questionAnswers(props.question.id)
			.onSnapshot( snapshot => {
				// Set up answer option count object
				let countObject = {}

				// Propogate it with the keys for each option and initialize to 0
				_.keys(props.question.options).map( (key, index) => countObject[key] = 0)

				// For each answer record, get the data
				snapshot.forEach( doc => {
					let data = doc.data()
					// If this was the current user's answer, save it in the userAnswers slot
					if ( data.userID === props.firebase.auth.currentUser.uid ) setUserAnswers(data.options)
					// Take each option this user chose and add its point value to the accumulative option count object
					_.keys(data.options).map( key => countObject[key] += data.options[key])
				})

				// Save the count object in array form sorted from most points to least
				setOptionCount(_.orderBy(_.keys(countObject).map( key => ({id: key, points: countObject[key]})), 'points', 'desc'))
			})

		return function cleanup() { unsubscribe() }
	}, [props.firebase, props.question])

	return optionCount ? (
        <div id="homePage">
			{/* All Options with Answer Counts */}
			<h2 className="questionText">{ props.question.message }</h2>
			<hr className="divider"/>
			<div className="answersPanel">
				{ optionCount.map( (option, index) => (
					<div>
						<AnswerRow 
							key={index}
							option={props.question.options[option.id]}
							points={option.points}
							userAnswer={userAnswers[option.id]}
						/>	
						<hr className="divider answerDivider" />
					</div>
				))}
			</div>
			<hr className="divider"/>
			<p className="fnlPlug">
				This app was custom crafted for Dr. O by the <a className="fnlLink" href="https://fnlhub.com/">Friday Night Lab</a> club. 
				It uses Google's real-time firebase database and cloud platform. 
				If you are interested in what we do, stop by!
			</p>
		</div>
	) : <Loading message="Loading responses" />
}

export default withFirebase(Results);