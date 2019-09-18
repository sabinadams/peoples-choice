import React from 'react'
import './FormItem.scss'
import _ from 'lodash'
import PointSymbol from '../PointSymbol/PointSymbol'

const FormItem = props => (
    <div className="formFieldContainer">
        <div className="pointSymbols">
            { _.times(props.points, index => <PointSymbol key={index}/>) }
        </div>
        
        <select defaultValue={props.chosenAnswer} className="formField" onChange={event => props.onChange(props.answerIndex, event.target.value, props.points)}>
            <option disabled hidden value='no_value'> {props.message} choice </option>
            { Object.keys(props.options).map( key => <option key={key} value={key}>{ props.options[key] } </option> ) }
        </select>
    </div>
)

export default FormItem;