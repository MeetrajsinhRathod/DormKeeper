import { firestoreReducer } from "redux-firestore";
import { user } from "../Firebaseset";

export const scheduleCleaning = (newSc) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore.collection('cleaning').doc(newSc.scRoomNo).set({
      roomNo: newSc.scRoomNo,
      date: newSc.scDate,
      time: newSc.scTime,
      status: 'pending',
    }).then(() => {
      dispatch({ type: "SCHEDULE_CLEANING", newSc });
      alert("scheduled cleaning successfully.");
    })
      .catch(err => {
        dispatch({ type: "SCHEDULE_CLEANING_ERROR", err });
        alert("FAILED to schedule cleaning. Please check internet connectivity.", err);
      });
  };
};

export const scheduleLaundry = (newSl) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore.collection('laundry').doc(newSl.slName).set({
      name: newSl.slName,
      roomNo: newSl.slRoomNo,
      date: newSl.slDate,
      time: newSl.slTime,
      items: newSl.slN,
      status: 'pending',
    }).then(() => {
      dispatch({ type: "SCHEDULE_LAUNDRY", newSl });
      alert("scheduled laundry successfully.");
    })
      .catch(err => {
        dispatch({ type: "SCHEDULE_LAUNDRY_ERROR", err });
        alert("FAILED to schedule laundry. Please check internet connectivity.", err);
      });
  };
};

export const updateProfile = (newP) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const puid = firebase.auth().W
    firestore.collection('users').doc(puid).update({
      username: newP.pUsername,
      phoneNo: newP.pPhoneNo,
      roomNo: newP.pRoomNo,
    }).then(() => {
      dispatch({ type: "UPDATE_PROFILE", newP });
      alert("profile updated.");
    })
      .catch(err => {
        dispatch({ type: "UPDATE_PROFILE_ERROR", err });
        alert("FAILED to update profile. Please check internet connectivity.", err);
      });

  };
};