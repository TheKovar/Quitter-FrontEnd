import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6md2d1t4mCqhIlHtUtqUQwPYcjphmRzY',
  authDomain: 'quitter2-c4cdd.firebaseapp.com',
  projectId: 'quitter2-c4cdd',
  storageBucket: 'quitter2-c4cdd.appspot.com',
  messagingSenderId: '43556592488',
  appId: '1:43556592488:web:485e8927de0f2c2ddf54dd'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db

