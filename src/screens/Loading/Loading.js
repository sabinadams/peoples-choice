import React, { useState, useEffect } from 'react';
import './Loading.scss';
import { withFirebase } from '../../Firebase'

function Loading(props) {
	const [ loadingDots, setLoadingDots ] = useState('')

	useEffect(() => {
		let interval = setInterval(() => {
			setLoadingDots( dots => dots.length === 3 ? '.' : `${dots}.` )
		}, 200)	
		return function cleanup() { clearInterval(interval) }
	}, [])

	return (
		<div className="container">
			<div className="hollowLoader">
				<div className="largeBox"></div>
				<div className="smallBox"></div>
			</div>
			<h2 className="loadingMessage">{props.message}{loadingDots}</h2>
		</div>
	)
}

export default withFirebase(Loading);