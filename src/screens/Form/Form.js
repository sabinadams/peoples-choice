import React, { useState, useEffect } from 'react'
import './Form.scss';
import { withFirebase } from '../../Firebase'
import Loading from '../Loading/Loading'

function Form(props) {

    const [ question, setQuestion ] = useState(null)

    useEffect( () => {
        let unsubscribe = props.firebase
            .questions()
            .limit(1)
            .onSnapshot( snapshot => snapshot.forEach( doc => setQuestion({ ...doc.data(), id: doc.id }) ) )
            
        return function cleanup() { unsubscribe() }
})

	return question ? (
        <div id="formPage">
            <h2>{question.message}</h2>
		</div>
	) : <Loading message="Loading Question"/>
}

export default withFirebase(Form);