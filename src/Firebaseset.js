import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
import firebaseConfig from "./Config"

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const user = firebase.auth().currentUser;

const db = firebase.firestore()

export { auth, db, user}
