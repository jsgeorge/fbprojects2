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
    firebase
      .createUser({ ...user })
      .then(() => {
        dispatch({ type: "USER_REGISTER", user });
      })
      .catch(err => {
        dispatch({ type: "USER_REGISTER_ERROR", err });
      });
  };
};
