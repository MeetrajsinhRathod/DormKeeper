export const addAnnouncement = (newAnn) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore.collection('announcements').add({
      title: newAnn.title,
      announcement: newAnn.announcement,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: "ADD_ANNOUNCEMENT", newAnn });
      alert("Announcement has been added.");
    })
      .catch(err => {
        dispatch({ type: "ADD_ANNOUNCEMENT_ERROR", err });
        alert("FAILED to add announcement. Please check internet connectivity.", err);
      });
  };
};

export const addMenu = (newMenu) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    console.log("Food time ",newMenu.time)
    switch (newMenu.time) {
      case 'breakfast':

        firestore.collection('mess').doc(newMenu.time).update({
          menu: newMenu.menu,
          date: newMenu.mDate,
        }).then(() => {
          dispatch({ type: "ADD_MENU", newMenu });
          alert("Menu added.");
        })
          .catch(err => {
            dispatch({ type: "ADD_MENU", err });
            alert("FAILED to add menu. Please check internet connectivity.", err);
          });
          break;


      case 'lunch':

        firestore.collection('mess').doc(newMenu.time).update({
          menu: newMenu.menu,
          date: newMenu.mDate,
        }).then(() => {
          dispatch({ type: "ADD_MENU", newMenu });
          alert("Menu added.");
        })
          .catch(err => {
            dispatch({ type: "ADD_MENU", err });
            alert("FAILED to add menu. Please check internet connectivity.", err);
          });
          break;

      case 'dinner':

        firestore.collection('mess').doc(newMenu.time).update({
          menu: newMenu.menu,
          date: newMenu.mDate,
        }).then(() => {
          dispatch({ type: "ADD_MENU", newMenu });
          alert("Menu added.");
        })
          .catch(err => {
            dispatch({ type: "ADD_MENU", err });
            alert("FAILED to add menu. Please check internet connectivity.", err);
          });
          break;

        default:
        alert("Select correct option.")
    }


  };
};


export const addBill = (newBill) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore.collection('bills').doc(newBill.roomNo).set({
      roomNo: newBill.roomNo,
      amount: newBill.amount,
      dueDate: newBill.dueDate,
      msg: newBill.msg,
    }).then(() => {
      dispatch({ type: "ADD_BILL", newBill });
      alert("Bill notification has been sent.");
    })
      .catch(err => {
        dispatch({ type: "ADD_BILL_ERROR", err });
        alert("FAILED to send bill notification. Please check internet connectivity.", err);
      });
  };
};

export const updateCleaning = (newUC) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

        firestore.collection('cleaning').doc(newUC.ucRoomNo).update({
          status: newUC.ucStatus,
        }).then(() => {
          dispatch({ type: "ADD_MENU", newUC });
          alert("updated.");
        })
          .catch(err => {
            dispatch({ type: "ADD_MENU", err });
            alert("FAILED to update value. Please check internet connectivity.", err);
          });


  };
};

export const updateLaundry = (newLA) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

        firestore.collection('laundry').doc(newLA.laName).update({
          status: newLA.laStatus,
        }).then(() => {
          dispatch({ type: "ADD_MENU", newLA });
          alert("updated.");
        })
          .catch(err => {
            dispatch({ type: "ADD_MENU", err });
            alert("FAILED to update value. Please check internet connectivity.", err);
          });

  };
};