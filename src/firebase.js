import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6qJzPN6MqeyEhGH0R2Ah09P6mLo3kaNw",
    authDomain: "clone-aec84.firebaseapp.com",
    databaseURL: "https://clone-aec84.firebaseio.com",
    projectId: "clone-aec84",
    storageBucket: "clone-aec84.appspot.com",
    messagingSenderId: "285509793220",
    appId: "1:285509793220:web:40561740e6fd0416506091",
    measurementId: "G-3TNZ2F70DB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

  export { db, auth };