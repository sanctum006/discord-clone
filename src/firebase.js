import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoWKNlfqmYyGqzu8NjtiRoiCIi_uUr_8U",
  authDomain: "discord-clone-101.firebaseapp.com",
  projectId: "discord-clone-101",
  storageBucket: "discord-clone-101.appspot.com",
  messagingSenderId: "72844495235",
  appId: "1:72844495235:web:859e169faf0985382b0eb6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
