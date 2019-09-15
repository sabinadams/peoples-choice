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
    }, [])

    const FormItem = () => (
        <select>
            {
                Object.keys(question.options).map( key => (
                    <option key={key} value={key}>{ question.options[key] }</option>
                ))
            }
        </select>
    )

	return question ? (
        <div id="formPage">
            <h2>{question.message}</h2>

            <form>
                <FormItem />
                <FormItem />
                <FormItem />
            </form>
            
		</div>
	) : <Loading message="Loading Question"/>
}

export default withFirebase(Form);