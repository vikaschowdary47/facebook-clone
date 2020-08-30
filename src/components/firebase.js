import firebase from "firebase;";

const firebaseConfig = {
  apiKey: "AIzaSyAsXQ2vfPfyDP_v5oKWg0gx1AAEwr9_v8U",
  authDomain: "fb-clone-47.firebaseapp.com",
  databaseURL: "https://fb-clone-47.firebaseio.com",
  projectId: "fb-clone-47",
  storageBucket: "fb-clone-47.appspot.com",
  messagingSenderId: "681767967393",
  appId: "1:681767967393:web:ea9c80972c52c52b61aee0",
  measurementId: "G-FT535MHS2G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
