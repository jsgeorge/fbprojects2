export const CreateNotification = note => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("notifications")
      .add({
        ...note,
        published: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_NOTE", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_NOTE_ERROR", err });
      });
  };
};
