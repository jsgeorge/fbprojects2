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
        published: new Date(),
        status: 0
      })
      .then(() => {
        firestore.collection("notifications").add({
          authorid: authorid,
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
export const UpdateProject = project => {
  console.log(project);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const authorid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    firestore
      .collection("projects")
      .doc(project.id)
      .set({
        ...project
      })
      .then(() => {
        firestore.collection("notifications").add({
          authorid: authorid,
          username: profile.username,
          action: "Modified a project",
          submitDate: new Date()
        });
        dispatch({ type: "UPDATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PROJECT_ERROR", err });
      });
  };
};
export const ChangeStatus = project => {
  console.log(project);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const authorid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    firestore
      .collection("projects")
      .doc(project.id)
      .set({
        ...project
      })
      .then(() => {
        firestore.collection("notifications").add({
          authorid: authorid,
          username: profile.username,
          action: "Modified status",
          submitDate: new Date()
        });
        dispatch({ type: "CHANGE_STATUS", project });
      })
      .catch(err => {
        dispatch({ type: "CHANGE_STATUS_ERROR", err });
      });
  };
};
export const DeleteProject = project => {
  console.log(project);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const authorid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    firestore
      .collection("projects")
      .doc(project.id)
      .delete()
      .then(() => {
        firestore.collection("notifications").add({
          authorid: authorid,
          username: profile.username,
          action: "Deleted a project",
          submitDate: new Date()
        });
        dispatch({ type: "DELETE_PROJECT" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_PROJECT_ERROR", err });
      });
  };
};
