import React from 'react'
import './AnswerRow.scss'
import _ from 'lodash'
import PointSymbol from '../PointSymbol/PointSymbol'

const AnswerRow = props => (
    <div className="answerRow">
        <h3 className="optionText">{props.option}</h3> 
        <h4 className="answerCount">
            {props.points} 
            {/* If this is an option the current user chose, add the point indicators */}
            {props.userAnswer ? (
                <span className="userPoints">
                    {_.times(props.userAnswer, index => <PointSymbol key={index} className="pointSymbol"/>)}
                </span>
            ) : null}
        </h4>
    </div>
)

export default AnswerRow