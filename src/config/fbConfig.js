import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

//Initialize firebase
var config = {
    apiKey: "AIzaSyDE4dCGwg_PTkOFKQoijdCl-v38AK26c7g",
    authDomain: "login-signup-fdf6f.firebaseapp.com",
    projectId: "login-signup-fdf6f",
    storageBucket: "login-signup-fdf6f.appspot.com",
    messagingSenderId: "512787931911",
    appId: "1:512787931911:web:979a47355c40567666dba2"
};

//firebase.initializeApp(config);
firebase.firestore().settings( {timestampsInSnapshots : true} );

export default firebase;