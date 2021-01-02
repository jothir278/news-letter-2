import firebase from 'firebase';
    

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCiN5obOWJ4zOFMNRxb4gsvx-hpLRAl3lY",
    authDomain: "newsletter-211af.firebaseapp.com",
    databaseURL: "https://newsletter-211af.firebaseio.com",
    projectId: "newsletter-211af",
    storageBucket: "newsletter-211af.appspot.com",
    messagingSenderId: "554728959285",
    appId: "1:554728959285:web:1e5ba13ee89907ac95b07c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 export default firebase.database();