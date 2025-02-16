export const signIn = credentials => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          dispatch({ type: "LOGIN_SUCCESS" });
          alert("Successfully Logged in.")
        })
        .catch(err => {
          dispatch({ type: "LOGIN_ERROR", err });
          alert("LOGIN FAILED. Please check email and password.")
        });
    };
  };

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: "SIGNOUT_SUCCESS" });
          alert("Successfully signed out")
        });
    };
  };

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((resp) => {
        
          return firestore.collection('users').doc(resp.user.uid).set({
              username: newUser.username,
              email: newUser.email,
              phoneNo: newUser.phoneNo,
              roomNo: newUser.roomNo,
              role: 'user'
          })
        }).then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "SIGNUP_ERROR", err });
          alert("SIGNUP FAILED. Please check email,password,internet connectivity.",err);
        });
    };
  };



  export const addCleaning = (newC) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();

      var config = {apiKey: "AIzaSyDE4dCGwg_PTkOFKQoijdCl-v38AK26c7g",
                    authDomain: "login-signup-fdf6f.firebaseapp.com"};

      var secondaryApp = firebase.initializeApp(config, "Secondary");

      secondaryApp
        .auth()
        .createUserWithEmailAndPassword(newC.cemail, newC.cpassword)
        .then((resp) => {
        
          return firestore.collection('users').doc(resp.user.uid).set({
              username: newC.cusername,
              email: newC.cemail,
              phoneNo: newC.cphoneNo,
              role: 'cleaning'
          })
        }).then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" });
            secondaryApp.auth().signOut();
            alert("Cleaning provider has been added !");
            window.location.reload();
        })
        .catch(err => {
          dispatch({ type: "SIGNUP_ERROR", err });
          alert("SIGNUP FAILED. Please check email,password,internet connectivity.",err);
        });
    };
  };

  export const removeCleaning = (newC) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();

      var config = {apiKey: "AIzaSyDE4dCGwg_PTkOFKQoijdCl-v38AK26c7g",
                    authDomain: "login-signup-fdf6f.firebaseapp.com"};

      var secondaryApp = firebase.initializeApp(config, "Secondary");

      secondaryApp.auth().signInWithEmailAndPassword(newC.cemail, newC.cpassword).then(()=>{

        secondaryApp.auth().onAuthStateChanged(user2=>{

            if(user2){
            
                user2.delete();
                alert("Cleaning provider has been removed !");
                window.location.reload();
            }
            else{
        
            }
        
        })

        }).catch(err=>{
            console.log(err);
            alert("Entered email id or password is incorrect!");
        })
    };
  };


  export const addLaundry = (newL) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();

      var config = {apiKey: "AIzaSyDE4dCGwg_PTkOFKQoijdCl-v38AK26c7g",
                    authDomain: "login-signup-fdf6f.firebaseapp.com"};

      var secondaryApp = firebase.initializeApp(config, "Secondary");

      secondaryApp
        .auth()
        .createUserWithEmailAndPassword(newL.lemail, newL.lpassword)
        .then((resp) => {
        
          return firestore.collection('users').doc(resp.user.uid).set({
              username: newL.lusername,
              email: newL.lemail,
              phoneNo: newL.lphoneNo,
              role: 'laundry'
          })
        }).then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" });
            secondaryApp.auth().signOut();
            alert("Laundry provider has been added !");
            window.location.reload();
        })
        .catch(err => {
          dispatch({ type: "SIGNUP_ERROR", err });
          alert("SIGNUP FAILED. Please check email,password,internet connectivity.",err);
        });
    };
  };

  export const removeLaundry = (newL) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();

      var config = {apiKey: "AIzaSyDE4dCGwg_PTkOFKQoijdCl-v38AK26c7g",
                    authDomain: "login-signup-fdf6f.firebaseapp.com"};

      var secondaryApp = firebase.initializeApp(config, "Secondary");

      secondaryApp.auth().signInWithEmailAndPassword(newL.lemail, newL.lpassword).then(()=>{

        secondaryApp.auth().onAuthStateChanged(user2=>{

            if(user2){
            
                user2.delete();
                alert("Laundry provider has been removed !");
                window.location.reload();
            }
            else{
        
            }
        
        })

        }).catch(err=>{
            console.log(err);
            alert("Entered email id or password is incorrect!");
        })
    };
  };




  export const verifyEmail = () => async (
      dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      dispatch({ type: "VERIFY_START" });
      alert("Email has been sent.")
      try{
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification();
        dispatch({ type: "VERIFY_SUCCESS" });
      } catch(err){
        dispatch({ type: "VERIFY_FAIL" });
        alert("Email verification failed. Please try again.")
      }

    };