
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyBq_rs0MfRUfQwW2Z8ARTfcCCoCvUyVqS4",
    authDomain: "linkedin-clone-4944b.firebaseapp.com",
    projectId: "linkedin-clone-4944b",
    storageBucket: "linkedin-clone-4944b.appspot.com",
    messagingSenderId: "922536881302",
    appId: "1:922536881302:web:7a20d3ebe67526be2c66b7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();

    
    
    export {  auth, provider, storage };
    export default db;