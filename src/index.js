import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore } from 'redux-firestore';
import {reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebase from 'firebase';
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(() => {

  ReactDOM.render(
      <Provider store={store}>
                <App />  
        </Provider>,
      document.getElementById('root')
    );
    
})

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch
    }
