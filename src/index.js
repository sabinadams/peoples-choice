import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContainer from './components/AppContainer';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase';

//my change

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <AppContainer />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
