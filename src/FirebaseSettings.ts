import firebase from 'firebase'


  if (!firebase.apps.length) {
    firebase.initializeApp({
      "apiKey": "AIzaSyBuR7N2YTOihHUklB-cXlsveNJ_DtUcEbs",
      "authDomain": "react-firebase-chat-c33ed.firebaseapp.com",
      "projectId": "react-firebase-chat-c33ed",
      "storageBucket": "react-firebase-chat-c33ed.appspot.com",
      "messagingSenderId": "651843814794",
      "appId": "1:651843814794:web:f97a19e9ff0da27ce8b473",
      "measurementId": "G-FRSQTV24F0"
  });
    // firebase.analytics();
    // firebase.auth().signInAnonymously()
    //   .then(() => {
    //     // Signed in..
    //     // alert("signed in");
    //     console.log("signed in using firebase")
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     alert(`message : ${errorMessage} code :${errorCode}`)
    //     // ...
    //   });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     var uid = user.uid;
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });

 
 }else {
    firebase.app(); // if already initialized, use that one
 } 
 export const firebaseDatabase = firebase.database();
 export default firebase