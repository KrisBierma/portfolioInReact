// import app from 'firebase/app';
// import 'firebase/database';
import firebase from 'firebase';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// class Firebase {
  // constructor() {
    firebase.initializeApp(config);
    // const db = firebase.database();
    // this.db = app.database();
  // }
// }

export default firebase;

/* <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2sF2gkOWKZ5YQOMDpYvJOly0Q1Zl9wCg",
    authDomain: "psalms-ffc9a.firebaseapp.com",
    databaseURL: "https://psalms-ffc9a.firebaseio.com",
    projectId: "psalms-ffc9a",
    storageBucket: "psalms-ffc9a.appspot.com",
    messagingSenderId: "652325704324"
  };
  firebase.initializeApp(config);
</script> */