import React, { useState, useEffect } from 'react'
import { withFirebase } from '../Firebase'

import Home from '../screens/Home/Home'
import Form from '../screens/Form/Form'
import Loading from '../screens/Loading/Loading'

function AppContainer(props) {
	const [ userID, setUserID ] = useState(0);
	const [ questionID, setQuestionID ] = useState(0)
	const [ hasAnswered, setHasAnswered ] = useState(null)
	const [ dataReady, setDataReady ] = useState(false)

	// Detect when the user logs in or out
	useEffect( () => 
		props.firebase.auth.onAuthStateChanged( user => setUserID( user ? user.uid : 0) )
	, [props.firebase.auth])

	// Grabs the question ID we are working with
	useEffect( () => {
		let unsubscribe = props.firebase
			.questions()
			.onSnapshot( snapshot => snapshot.forEach( doc => setQuestionID( doc.id ) ) )

        return function cleanup() { unsubscribe() }
	}, [props.firebase])
	
	// Grabs answers from the user for this question. 
	// If it finds one, we should load the home page instead of the question form because they can't answer twice
	useEffect( () => {
		// Only should run this if both questionID and userID have been loaded from firebase
		if ( userID && questionID ) {
			let unsubscribe = props.firebase
				.userAnswer( questionID, userID)
				.onSnapshot( snapshot => setHasAnswered(snapshot.docs.length ? true : false) )

			return function cleanup() { unsubscribe() }
		}
	}, [questionID, userID, props.firebase])

	// Sets indicator for whether or not the initialization data is ready
	// We should have a logged in user ID and know if the uesr has answered the question or not before loading the application
	useEffect( () => setDataReady( userID && hasAnswered !== null), [userID, hasAnswered])

	// Data must be ready, otherwise show a Loading screen
	// If the user has answered already show the home page
	// If they haven't answered yet, show the form page
	return dataReady ? ( hasAnswered ? <Home /> : <Form /> ): <Loading message="Loading Application"/>
}

export default withFirebase(AppContainer)