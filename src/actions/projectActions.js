// export const getProjects = () => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     firestore.collection("projects").then(() => {
//       dispatch({ type: "GET_PROJECTS" });
//     });
//   };
// };
export const CreateProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const authorid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorid: authorid,
        author: profile.username,
        published: new Date()
      })
      .then(() => {
        firestore.collection("notifications").add({
          username: profile.username,
          action: "Submitted a project",
          submitDate: new Date()
        });
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
