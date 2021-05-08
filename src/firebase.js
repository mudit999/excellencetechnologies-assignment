import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgwSbyQOzl4NYO-Rzcq7JUr0OAm5p8aJo",
    authDomain: "todo-app-assignment-8f8f1.firebaseapp.com",
    projectId: "todo-app-assignment-8f8f1",
    storageBucket: "todo-app-assignment-8f8f1.appspot.com",
    messagingSenderId: "834184356155",
    appId: "1:834184356155:web:cb5d0497374c6e0599571e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initializing Services
  const projectFirestore = firebase.firestore();
  
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

  export { projectFirestore,timeStamp };
