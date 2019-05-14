import firebase from "firebase";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-eNlH6e959UXs2a-I0wkHAMnf-0t4Ryg",
  authDomain: "filelists-57511.firebaseapp.com",
  databaseURL: "https://filelists-57511.firebaseio.com",
  projectId: "filelists-57511",
  storageBucket: "filelists-57511.appspot.com",
  messagingSenderId: "100672959363"
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

//Initialize other services on firebase instance
const firestore = firebase.firestore(); // <- needed if using firestore
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
