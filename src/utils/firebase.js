import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCwsFqNfJ_N8AQodCyBH19sS-Jq0Y5hR4I",
  authDomain: "to-do-6b101.firebaseapp.com",
  databaseURL: "https://to-do-6b101.firebaseio.com",
  projectId: "to-do-6b101",
  storageBucket: "to-do-6b101.appspot.com",
  messagingSenderId: "82971655462",
  appId: "1:82971655462:web:8585e1a86fe40423d3d5e7",
  measurementId: "G-7KWLW7LLK4"
};
// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB;