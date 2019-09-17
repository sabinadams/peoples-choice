import React, { useState, useEffect } from 'react'
import { withFirebase } from '../../Firebase'
import Loading from '../Loading/Loading'
import _ from 'lodash'
import './Home.scss';
import PointSymbol from '../../components/PointSymbol/PointSymbol'
function Home(props) {
	// Holds the user's answers
	const [ userAnswers, setUserAnswers ] = useState([])
	// Holds the answer counts for all users
	const [ optionCount, setOptionCount ] = useState()

	useEffect( () => {
		// Get the users' answers
		props.firebase
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
					if ( data.userID === props.firebase.auth.currentUser.uid )
						setUserAnswers(data.options)
					// Take each option this user chose and add its point value to the accumulative option count object
					_.keys(data.options).map( key => countObject[key] += data.options[key])
				})

				// Save the count object in array form sorted from most points to least
				setOptionCount(_.orderBy(_.keys(countObject).map( key => ({id: key, points: countObject[key]})), 'points', 'desc'))
			})
	}, [props.firebase, props.question])

	return optionCount ? (
        <div id="homePage">
			{/* All Options with Answer Counts */}
			<h2 className="questionText">
				{ props.question.message }
			</h2>
			<hr className="divider"/>
			<div className="answersPanel">
				{ optionCount.map( (option, index) => (
					<div key={index} className="answerRow">
						<h3 className="optionText">{props.question.options[option.id]}</h3> 
						<h4 className="answerCount">
							{option.points} 
							{userAnswers[option.id] ? (
								<span className="userPoints">
									{_.times(userAnswers[option.id], index => <PointSymbol className="pointSymbol"/>)}
								</span>
							) : null}
						</h4>
						
					</div>
				))}
			</div>
			<hr className="divider"/>
			<p className="fnlPlug">
				This app was custom crafted for Dr. O by the <a class="fnlLink" href="https://fnlhub.com/">Friday Night Lab</a> club. 
				It uses Google's real-time firebase database and cloud platform. 
				If you are interested in what we do, stop by!
			</p>
		</div>
	) : <Loading message="Loading responses" />
}

export default withFirebase(Home);