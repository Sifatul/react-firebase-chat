import firebase from 'firebase'


  if (!firebase.apps.length) {
      console.log(process.env)
    firebase.initializeApp({
      "apiKey": process.env.REACT_APP_apiKey,
      "authDomain": process.env.REACT_APP_authDomain,
      "projectId": process.env.REACT_APP_projectId,
      "storageBucket": process.env.REACT_APP_storageBucket,
      "messagingSenderId": process.env.REACT_APP_messagingSenderId,
      "appId": process.env.REACT_APP_appId,
      "measurementId": process.env.REACT_APP_measurementId,
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