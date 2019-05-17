export const UserLogin = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
export const UserLogout = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firebase = getFirebase();
    firebase.auth().signOut();
  };
};
export const UserRegister = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstname: user.firstname,
            lastname: user.lastname,
            initials: user.firstname[0] + user.lastname[0],
            username: user.username
          });
      })
      .then(() => {
        const authorid = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        firestore.collection("notifications").add({
          authorid: authorid,
          username: profile.username,
          action: "Joined the group",
          submitDate: new Date()
        });
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "REGISTER_ERROR", err });
      });
  };
};
