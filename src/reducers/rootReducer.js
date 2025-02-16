import { combineReducers } from 'redux'
import authReducer from './authReducer'
import adminReducer from './adminReducer'
import userReducer from './userReducer'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;