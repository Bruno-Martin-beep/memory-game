import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyB_C50VPK7_3oWC76pZIB2x-bd5mXo8nvY",
  authDomain: "memory-game-b80cb.firebaseapp.com",
  projectId: "memory-game-b80cb",
  storageBucket: "memory-game-b80cb.appspot.com",
  messagingSenderId: "327036179749",
  appId: "1:327036179749:web:9decb4b005bae3a3dcb6cc",
};

firebase.initializeApp(config);

export default firebase;
