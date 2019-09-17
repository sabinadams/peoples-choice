import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
	apiKey: "AIzaSyAdrCQARix3nB63ip_8cw78U1Oqwh17cEo",
	authDomain: "peoples-choice-71a4f.firebaseapp.com",
	databaseURL: "https://peoples-choice-71a4f.firebaseio.com",
	projectId: "peoples-choice-71a4f",
	storageBucket: "peoples-choice-71a4f.appspot.com",
	messagingSenderId: "462867524584",
	appId: "1:462867524584:web:3a6c398ccb3ebf1f5f925d"
}

// firestore().collection("item").add({...item, created: firebase.firestore.Timestamp.fromDate(new Date()) })

class Firebase {
	constructor () {
		firebase.initializeApp(config)

		this.auth = firebase.auth()
		this.db = firebase.firestore()
		
		this.auth.signInAnonymously().catch( error => {
			console.log(error)
		})
	}

	questions = () => this.db.collection('questions').orderBy('date', 'desc').limit(1)
	answers = () => this.db.collection('answers')
	questionAnswers = questionID => this.db.collection(`answers`).where('questionID', '==', questionID)
	userAnswer = (questionID, userID) => this.db.collection(`answers`).where('questionID', '==', questionID).where('userID', '==', userID)
}

export default Firebase