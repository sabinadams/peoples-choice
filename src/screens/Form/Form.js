import React, { useState, useEffect } from 'react'
import './Form.scss';
import { withFirebase } from '../../Firebase'
import Loading from '../Loading/Loading'
import PointSymbol from '../../components/PointSymbol/PointSymbol'
import _ from 'lodash';

function Form(props) {
    const [ question, setQuestion ] = useState(null)

    const [ answers, setAnswers ] = useState([null, null, null])

    const [ formComplete, setFormComplete ] = useState(false)

    useEffect( () => {
        let unsubscribe = props.firebase
            .questions()
            .limit(1)
            .onSnapshot( snapshot => snapshot.forEach( doc => setQuestion({ ...doc.data(), id: doc.id }) ) )
            
        return function cleanup() { unsubscribe() }
    }, [props.firebase])

    useEffect( () => {
        setFormComplete( answers[1] && answers[2] && answers[3] )  
    }, [answers])

    const changeAnswer = (index, value) => {
        console.log('Changing Answer')
        let newAnswers = answers
        newAnswers[index] = value
        setAnswers(newAnswers)

        console.log(answers)
    }

    const FormItem = props => (
        <div className="formFieldContainer">
            <div className="pointSymbols">
                { _.times(props.points, index => <PointSymbol key={index}/>) }
            </div>
            
            <select defaultValue={null} className="formField" onChange={event => changeAnswer(props.index, event.target.value)}>
                <option disabled value={null} hidden>{props.message} choice...</option>
                { 
                    Object.keys(question.options).map( key => 
                        !answers.includes(key.toString()) ? 
                            <option key={key} value={key}>{ question.options[key] }</option> 
                            : null
                    ) 
                }
            </select>
        </div>
    )

    // const validateForm()
    const handleSubmit = () => {
        // if ( validateForm() ) {

        // }
    }

	return question ? (
        <div id="formPage">
            <h2 className="question">{question.message}</h2>
            <hr className="divider"/>
            <div className="formContainer">
                <FormItem index={0} message='First' points={3}/>
                <FormItem index={1} message='Second' points={2}/>
                <FormItem index={2} message='Third' points={1}/>
            </div>
            <hr className="divider"/>
            <br />
            <button disabled={formComplete} onClick={() => handleSubmit()} className="submitButton">Vote</button>
		</div>
	) : <Loading message="Loading Question"/>
}

export default withFirebase(Form);