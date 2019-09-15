import React from 'react';
import './Loading.scss';
import { withFirebase } from '../../Firebase'

function Loading(props) {
	return (
		<div className="container">
			<div className="hollowLoader">
				<div className="largeBox"></div>
				<div className="smallBox"></div>
			</div>
			<h2 className="loadingMessage">{props.message}</h2>
		</div>
	)
}

export default withFirebase(Loading);